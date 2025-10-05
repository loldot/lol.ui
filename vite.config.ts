import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig(({ mode }) => {
  const baseConfig = {
    plugins: [
      dts({
        insertTypesEntry: true,
        include: ['src/**/*'],
        exclude: ['**/*.test.ts', '**/*.spec.ts'],
        outDir: 'dist'
      })
    ],
    esbuild: {
      target: 'es2020' as const
    }
  }

  if (mode === 'library') {
    return {
      ...baseConfig,
      build: {
        lib: {
          entry: resolve(process.cwd(), 'src/index.ts'),
          name: 'LolUI',
          fileName: (format: string) => `index.${format === 'es' ? 'js' : format === 'cjs' ? 'cjs' : 'umd.js'}`,
          formats: ['es', 'cjs', 'umd'] as const
        },
        rollupOptions: {
          // Bundle lit dependencies for better web component compatibility
          external: [],
          output: {
            globals: {}
          }
        },
        sourcemap: true,
        minify: 'esbuild' as const,
        target: 'es2020' as const,
        reportCompressedSize: true,
        chunkSizeWarningLimit: 1000
      }
    }
  }

  if (mode === 'components') {
    return {
      ...baseConfig,
      build: {
        emptyOutDir: false,
        rollupOptions: {
          input: {
            'components/ui-card': resolve(process.cwd(), 'src/components/ui-card.ts'),
            'components/ui-tabs': resolve(process.cwd(), 'src/components/ui-tabs.ts'),
            'components/ui-notification': resolve(process.cwd(), 'src/components/ui-notification.ts'),
            'styles/utils': resolve(process.cwd(), 'src/styles/utils.ts')
          },
          external: [],
          output: [
            {
              dir: 'dist',
              format: 'es' as const,
              entryFileNames: '[name].js'
            },
            {
              dir: 'dist',
              format: 'cjs' as const,
              entryFileNames: '[name].cjs'
            }
          ]
        },
        sourcemap: true,
        minify: 'esbuild' as const,
        target: 'es2020' as const
      }
    }
  }

  // Default development mode
  return {
    ...baseConfig,
    build: {
      sourcemap: true,
      target: 'es2020' as const
    }
  }
})
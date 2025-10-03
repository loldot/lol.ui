import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig(({ mode }) => ({
  plugins: [
    dts({
      insertTypesEntry: true,
      include: ['src/**/*'],
      exclude: ['**/*.test.ts', '**/*.spec.ts']
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'LolUI',
      fileName: (format) => `lol-ui.${format}.js`,
      formats: ['es', 'umd', 'cjs']
    },
    rollupOptions: {
      external: ['lit', 'lit-html'],
      output: {
        globals: {
          'lit': 'Lit',
          'lit-html': 'LitHtml'
        }
      }
    },
    sourcemap: true,
    minify: 'esbuild',
    target: 'es2020',
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000
  },
  esbuild: {
    target: 'es2020'
  }
}))
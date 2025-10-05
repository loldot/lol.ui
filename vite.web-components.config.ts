import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      include: ['src/web-components.ts'],
      exclude: ['**/*.test.ts', '**/*.spec.ts'],
      outDir: 'dist',
      rollupTypes: true
    })
  ],
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(process.cwd(), 'src/web-components.ts'),
      name: 'LolUIWebComponents',
      fileName: (format: string) => `web-components.${format === 'es' ? 'js' : format === 'cjs' ? 'cjs' : 'umd.js'}`,
      formats: ['es', 'cjs', 'umd'] as const
    },
    rollupOptions: {
      // Bundle everything including lit for standalone web component usage
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
  },
  esbuild: {
    target: 'es2020' as const
  }
})
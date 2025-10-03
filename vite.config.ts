import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
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
    minify: 'esbuild'
  },
  esbuild: {
    target: 'es2020'
  }
})
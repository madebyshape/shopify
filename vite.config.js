import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    // Output directly into the Shopify assets folder
    outDir: 'assets',
    // Don't wipe the assets folder — other theme files live here
    emptyOutDir: false,
    rollupOptions: {
      input: resolve(__dirname, 'src/index.js'),
      output: {
        // Stable filenames so Shopify Liquid can reference them reliably
        entryFileNames: 'custom.js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'index.css') return 'custom.css'
          return '[name].[ext]'
        },
      },
    },
  },
})

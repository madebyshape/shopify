import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { readdirSync, existsSync } from 'fs'

// Automatically discover page-specific entry points from src/pages/*.js
// Each file becomes assets/custom-[name].js, loaded conditionally in Liquid
const pagesDir = resolve(__dirname, 'src/pages')
const pageEntries = existsSync(pagesDir)
  ? Object.fromEntries(
      readdirSync(pagesDir)
        .filter(f => f.endsWith('.js'))
        .map(f => [f.replace('.js', ''), resolve(pagesDir, f)])
    )
  : {}

export default defineConfig(({ mode }) => ({
  plugins: [
    tailwindcss(),
  ],
  build: {
    // Output directly into the Shopify assets folder
    outDir: 'assets',
    // Don't wipe the assets folder — other theme files live here
    emptyOutDir: false,
    // Source maps in development for easier debugging in browser DevTools
    sourcemap: mode === 'development',
    rollupOptions: {
      input: {
        custom: resolve(__dirname, 'src/index.js'),
        // Spread in any page-specific entries found in src/pages/
        ...pageEntries,
      },
      output: {
        entryFileNames: (chunk) => {
          // Page bundles get a custom- prefix: custom-product.js, custom-collection.js etc.
          if (pageEntries[chunk.name] !== undefined) return `custom-${chunk.name}.js`
          return '[name].js'
        },
        // Shared chunks stay flat in assets/ with a stable name (no nested assets/assets/ path)
        chunkFileNames: 'custom-vendor-[hash].js',
        // Stable filenames so Shopify Liquid can reference them reliably
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'index.css') return 'custom.css'
          return '[name].[ext]'
        },
      },
    },
  },
}))

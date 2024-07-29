import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@pages': resolve(__dirname, './src/pages'),
      '@features': resolve(__dirname, './src/features'),
      '@entities': resolve(__dirname, './src/entities'),
      '@shared': resolve(__dirname, './src/shared'),
    },
  },
})

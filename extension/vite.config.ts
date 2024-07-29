import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json'
import { resolve } from 'path'

export default defineConfig({
  // @ts-ignore
  plugins: [react(), crx({ manifest })],
  root: './',
  publicDir: 'public',
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      {
        find: '@pages',
        replacement: resolve(__dirname, 'src/pages'),
      },
      {
        find: '@features',
        replacement: resolve(__dirname, 'src/features'),
      },
      {
        find: '@entities',
        replacement: resolve(__dirname, 'src/entities'),
      },
      {
        find: '@shared',
        replacement: resolve(__dirname, 'src/shared'),
      },
    ],
  },
})

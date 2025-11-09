import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'
import { imagetools } from 'vite-imagetools'

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    imagetools({
      defaultDirectives: (url) => {
        return new URLSearchParams({
          format: 'webp;png',
          quality: '85'
        })
      }
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240,
      deleteOriginFile: false
    })
  ],
  base: command === 'build' ? '/Evershan-Chauffer-website/' : '/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'framer-motion': ['framer-motion'],
          'react-vendor': ['react', 'react-dom', 'react-router-dom']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
}))

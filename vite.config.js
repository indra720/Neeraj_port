import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        businesses: resolve(__dirname, 'businesses.html'),
        contact: resolve(__dirname, 'contact.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        global: resolve(__dirname, 'global.html'),
        international: resolve(__dirname, 'international.html'),
        journey: resolve(__dirname, 'journey.html'),
        joyHospitalityGroup: resolve(__dirname, 'joy-hospitality-group.html'),
        returnToIndia: resolve(__dirname, 'return-to-india.html'),
        vision: resolve(__dirname, 'vision.html'),
      }
    }
  },
  server: {
    port: 5173,
    host: true,
    watch: {
      ignored: ['**/*.zip', '**/*.pdf']
    }
  }
})

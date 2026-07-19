import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw13u-bnwmrVeFIpdLHAtbOXnlBIg5_qwX-9KmnZ5lBTWQJA2YeltT7c8xFz7B6B3k_'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      '/api': {
        target: SCRIPT_URL,
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, '/exec')
      }
    }
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://scaling-journey-jjggrv5wj4wxhjjqj-8000.app.github.dev',
        changeOrigin: true,
      }
    }
  }
})

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: "/",

  build: {
    rollupOptions: {
      external: ["src/assets/Images/self.png"], // Add any other external modules here
    },
  },

  server: {
    port: 3000,
  },

  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

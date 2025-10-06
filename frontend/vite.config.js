import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {port:5173},
  resolve: {
    alias: {
      "react/jsx-runtime": path.resolve("node_modules/react/jsx-runtime.js"),
    },
  },
})

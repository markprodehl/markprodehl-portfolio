import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Add for Kinsta Hosting and to allow your mobile access on localhost:8080
    port: 8080   // set your desired port here
  }
})

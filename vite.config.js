import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Dev server (npm run dev)
  server: {
    port: 5173,
    open: true
  },
  // Production preview server (npm run preview)
  // host: true means listen on 0.0.0.0 — anyone on the same WiFi can reach it
  preview: {
    port: 4173,
    host: true,
    strictPort: true
  }
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",  // Exposes the app on all network interfaces (external access)
    port: 3000,       // Ensures the app runs on port 3000
    strictPort: true, // Prevents Vite from using a different port if 3000 is taken
  },
  build: {
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
  define: {
    // Inject the version into the app globally during build
    __BUILD_VERSION__: JSON.stringify("1.0.1"),
  },
});

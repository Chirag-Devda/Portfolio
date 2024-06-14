import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600, // Adjust this value as needed
    rollupOptions: {
      output: {
        manualChunks: {
          // Specify manual chunks here if necessary
        },
      },
    },
  },
});

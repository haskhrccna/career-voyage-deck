import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      external: ['/assets/*'],
      input: path.resolve(__dirname, 'index.html'),
      output: {
        manualChunks: undefined,
        inlineDynamicImports: false,
        format: 'es',
        dir: 'dist'
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  base: './' // Add this line
});
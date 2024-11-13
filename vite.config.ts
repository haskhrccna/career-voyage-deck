import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  root: process.cwd(),
  base: '', // Empty base to use relative paths
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    manifest: true,
    modulePreload: {
      polyfill: false
    },
    rollupOptions: {
      input: './index.html',
      preserveEntrySignatures: "strict",
      output: {
        format: 'es',
        entryFileNames: '[name].[hash].js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash][extname]'
      }
    },
    assetsInlineLimit: 0,
    cssCodeSplit: true,
    sourcemap: false
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
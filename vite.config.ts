import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// This configuration tells Vite how to build your application
export default defineConfig({
  // Enable React plugin for proper JSX transformation
  plugins: [react()],
  
  // Configure build output
  build: {
    // Output directory (where files will be generated)
    outDir: 'dist',
    
    // Generate sourcemaps for debugging
    sourcemap: true,
    
    // Configure the bundling
    rollupOptions: {
      output: {
        // Ensure we get separate chunks for better caching
        manualChunks: {
          'vendor': ['react', 'react-dom'],
        },
        // Define clear names for our bundles
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  },
  
  // Resolve aliases for cleaner imports
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})

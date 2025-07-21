import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: [
      '@react-spring/web',
      '@react-spring/three',
      '@react-three/fiber',
      '@react-three/drei',
      'lucide-react',
      '@vapi-ai/web',
      'events'
    ],
  },
  server: {
    port: 3000,
    open: true,
    headers: {
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'X-XSS-Protection': '1; mode=block',
      // UPDATED: Allow microphone access
      'Permissions-Policy': 'camera=(), microphone=(self), geolocation=()',
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          animations: ['@react-spring/web', '@react-spring/three'],
          ui: ['lucide-react'],
          voice: ['@vapi-ai/web', 'events']
        },
      },
    },
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    target: 'es2015',
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
  },
  preview: {
    headers: {
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'X-XSS-Protection': '1; mode=block',
      // UPDATED: Allow microphone access
      'Permissions-Policy': 'camera=(), microphone=(self), geolocation=()',
    },
  },
});
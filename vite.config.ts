import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from "path";

export default defineConfig(() => {
  const isGitHubPages = process.env.DEPLOY_TARGET === 'gh-pages'

  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    base: isGitHubPages ? '/product-manager/' : '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        'app': path.resolve(__dirname, './src/app'),
        'assets': path.resolve(__dirname, './src/assets'),
        'entities': path.resolve(__dirname, './src/entities'),
        'features': path.resolve(__dirname, './src/features'),
        'pages': path.resolve(__dirname, './src/pages'),
        'shared': path.resolve(__dirname, './src/shared'),
        'widgets': path.resolve(__dirname, './src/widgets'),
      }
    },
  }
})

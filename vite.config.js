import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
// import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // tailwindcss(), // Temporariamente desabilitado
    svelte()
  ],
  base: process.env.NODE_ENV === 'production' ? '/lowrider-festival/' : '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})

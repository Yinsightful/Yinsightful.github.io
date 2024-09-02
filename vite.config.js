import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//this is the deployment version
export default defineConfig({
  plugins: [react()],
    build: {
    outDir: 'dist',
  },
  base: './'
});

// This is the npm run dev version
// export default defineConfig({

// })
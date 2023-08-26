import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { plugin as mdPlugin, Mode } from './plugin-markdown/index';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
    mdPlugin({
      mode: [Mode.HTML],
    }),
  ],
  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks: {
  //         react: ['react'],
  //         react_dom: ['react-dom'],
  //         react_router: ['react-router-dom'],
  //       }
  //     }
  //   }
  // }
})

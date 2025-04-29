import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { plugin as mdPlugin, Mode } from './plugin-markdown/index';
import AutoImport from 'unplugin-auto-import/vite';
import AntdResolver from 'unplugin-auto-import-antd';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdPlugin({
      mode: [Mode.HTML],
    }),
    AutoImport({
      dts: true,
      resolvers: [AntdResolver()],
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {},
      },
    },
  },
});

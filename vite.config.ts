import vue from '@vitejs/plugin-vue';
import { server } from 'typescript';

export default {
  base: './',
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.zerotier.com/api/v1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  }
};
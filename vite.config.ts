import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import postcssImportPlugin from 'postcss-import';

export default defineConfig({
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src')
    },
  },
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [postcssImportPlugin({
        resolve(id, basedir) {
          console.log('test');
          
          if (/^~/.test(id)) {
            return 'test.css';
          }
  
          return path.resolve(basedir, id);
        },
      })]
    }
  },
  server: {
    port: 9000,
  },
});

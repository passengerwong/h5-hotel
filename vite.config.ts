import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteVConsole } from 'vite-plugin-vconsole';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    base: './',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        'views': path.resolve(__dirname, './src/views')
      },
      extensions: ['.ts', '.json'],
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          additionalData: `@import "${path.resolve(__dirname, './src/css/variables.less')}";`
        }
      }
    },
    plugins: [
      vue(),
      viteVConsole({
        entry: path.resolve('./src/main.ts'),
        localEnabled: true,
        enabled: true,
      })
    ],
    server: {
      open: true
    }
  }
})

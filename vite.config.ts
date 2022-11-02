import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterExports } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'


export default defineConfig({
  plugins: [
    vue(),
    VueRouter(),
    Components({resolvers: [HeadlessUiResolver()] } ),
    AutoImport({
      imports: ['vue', '@vueuse/head', { 'vue-router/auto': VueRouterExports }],
    }),
  ],
  server: {
    proxy:{
      '/api':{
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  },
})

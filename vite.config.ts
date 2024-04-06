import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',	//解决“vite use `--host` to expose”
    port: 8083,
    hmr: true,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8089',//后端接口地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  },
  define: {
    'process.env': {
      'BASE_API': "http://localhost:8089"
    }
  }
})

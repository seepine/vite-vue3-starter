import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import viteESLint from '@ehutch79/vite-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteESLint()],
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
    }
  },
  css: { preprocessorOptions: { scss: { charset: false } } },
  build: {
    cssCodeSplit: true, // 如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
    sourcemap: false, // 构建后是否生成 source map 文件。如果为 true，将会创建一个独立的 source map 文件
    chunkSizeWarningLimit: 550, // 单位kb  打包后文件大小警告的限制 (文件大于此此值会出现警告)
    assetsInlineLimit: 4096, // 单位字节（1024等于1kb） 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项。
    minify: 'terser', // 'terser' 相对较慢，但大多数情况下构建后的文件体积更小。'esbuild' 最小化混淆更快但构建后的文件相对更大。
    terserOptions: {
      compress: {
        // eslint-disable-next-line camelcase
        drop_console: true, // 生产环境去除console
        // eslint-disable-next-line camelcase
        drop_debugger: true // 生产环境去除debugger
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 4000, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true // 允许跨域
    // 设置代理，根据我们项目实际情况配置
    // proxy: {
    //   '/webapi': {
    //     target: 'http://127.0.0.1:9898',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/webapi/', '/')
    //   }
    // }
  }
})

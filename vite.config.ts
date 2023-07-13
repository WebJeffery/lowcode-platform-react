import { 
  defineConfig,
  normalizePath
} from 'vite'
import react from '@vitejs/plugin-react'
// 如果类型报错，需要安装 @types/node: pnpm add @types/node -D -w
import path from 'path'
import autoprefixer from 'autoprefixer'
import windi from "vite-plugin-windicss"
import viteEslint from 'vite-plugin-eslint'
import viteStylelint from 'vite-plugin-stylelint'
import tsconfigPaths from "vite-tsconfig-paths";

// 全局 scss 文件的路径
// 用 normalizePath 解决 window 下的路径问题
const variablePath = normalizePath(path.resolve('./src/assets/scss/variable.scss'));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    windi(),
    viteEslint(),
    viteStylelint({
      // 对某些文件排除检查
      exclude: /windicss|node_modules/
    }),
    tsconfigPaths()
  ],
  // css 相关的配置
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData 的内容会在每个 scss 文件的开头自动注入
        additionalData: `@import "${variablePath}";`
      }
    },
    modules: {
      // 一般我们可以通过 generateScopedName 属性来对生成的类名进行自定义
      // 其中，name 表示当前文件名，local 表示类名
      generateScopedName: "[name]__[local]___[hash:base64:5]"
    },
    // 进行 PostCSS 配置
    postcss: {
      plugins: [
        autoprefixer({
          // 指定目标浏览器
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
        })
      ]
    }
  }
})

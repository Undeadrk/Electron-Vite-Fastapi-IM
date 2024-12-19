import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

// tailwindcss
import tailwindcss from 'tailwindcss'

// element-plus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'



export default defineConfig({

  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [
      externalizeDepsPlugin(),

    ]
  },
  renderer: {
    css: {
      postcss: {
        plugins: [tailwindcss],
      }
    },
    server: {
      
    },
    resolve: {
      alias: {
        '@': resolve('src/renderer/src'),
        '@renderer': resolve('src/renderer/src'),
      }
    },
    plugins: [
      vue(),
      vueSetupExtend(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
    ]
  }
})



import { createApp } from 'vue'
import App from './App.vue'

import router from './route'

import { createPinia } from 'pinia'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '@renderer/assets/tailwind.css' // 引入css文件

const app =createApp(App)

const pinia = createPinia()

app.use(pinia)

for (const [key, value] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, value)
}

app.use(router)

app.mount('#app')


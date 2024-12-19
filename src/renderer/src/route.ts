import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'default',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/main',
      name: 'Main',
      component: () => import('@/views/Main.vue'),
      children: [
        {
          path: 'home',
          name: 'Home',
          children: [
            {
              path: 'about',
              component: () => import('@/views/About.vue')
            },
          ],
          component: () => import('@/views/Home.vue')
        },
        {
          path: 'chat',
          name: 'Chat',
          component: () => import('@/views/Chat.vue'),
          children: [
            {
              path: 'chatzone',
              name: 'ChatZone',
              component: () => import('@/views/ChatZone.vue')
            },
          ]
        },
        {
          path: 'test',
          name: 'Test',
          component: () => import('@/views/Test.vue')
        },
      ]
    },
    ]
    })
export default router;



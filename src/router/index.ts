import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Login from '../pages/login/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    meta: {
      title: '登录'
    },
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

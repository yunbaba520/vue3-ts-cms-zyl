import { localCache } from '@/utils/cache';
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('../views/home/home.vue')
    },
    {
      path: '/login',
      component: () => import('../views/login/login.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/notFound/not-found.vue')
    }
  ]
})
// 导航守卫
router.beforeEach((to, from) => {
  const token = localCache.getCache('login/token')
  // 去其他页面并且没有token
  if (to.path !== '/login' && !token) {
    return '/login'
  }
})
export default router

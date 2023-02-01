import { localCache } from '@/utils/cache';
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      component: () => import('../views/main/main.vue')
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
// 动态路由两种实现
// 1.根据角色role动态加载路由
// 前端需要有一一对应关系，比如 总裁->对应的路由  组长->对应的路由。。。
// 弊端：比较死板，新增一个角色的话需要修改前端代码，新增一个key value,也可以后端返回json，对后端要求高，不好组织代码
// 2. 根据菜单动态加载
// 我们在登录后有拿到usermenus 映射成路由对象
export default router

import type { RouteRecordRaw } from 'vue-router'
// 用户第一个菜单对应路由
export let firstRoute: RouteRecordRaw | undefined = undefined
// 获取用户菜单对应路由
export function mapMenuToRoutes(menus: any[]) {
  // 1.加载所有的路由对象
  const localRoutes = loadLocalRoutes()

  // 2.路由匹配
  const finalRoutes: RouteRecordRaw[] = []
  for (const menu of menus) {
    for (const submenu of menu.children) {
      const menuUrl = submenu.url
      const route = localRoutes.find((item) => item.path === menuUrl)
      if (route) finalRoutes.push(route)
      if (!firstRoute && route) firstRoute = route
    }
  }

  // 3.不确定有几层
  // const finalRoutes: RouteRecordRaw[] = []
  // function _recurseGetRoute(menus: any[]) {
  //   for (const menu of menus) {
  //     if (menu.type === 2) {
  //       const route = localRoutes.find((item) => item.path === menu.url)
  //       if (route) finalRoutes.push(route)
  //       if (!firstRoute && route) firstRoute = route
  //     } else {
  //       if (menu.type === 1 && menu.children.length) {
  //         finalRoutes.push({ path: menu.url, redirect: menu.children[0].url })
  //       }
  //       _recurseGetRoute(menu.children ?? [])
  //     }
  //   }
  // }
  // _recurseGetRoute(menus)

  return finalRoutes
}
// 获取本地所有路由
function loadLocalRoutes() {
  // 1.加载所有的模板
  const modules: Record<string, any> = import.meta.glob(
    '../router/main/**/*.ts',
    { eager: true }
  )

  // 2.遍历所有的模板为路由对象
  const routes: RouteRecordRaw[] = []
  for (const key in modules) {
    const route = modules[key].default
    routes.push(route)
  }
  return routes
}
// 根据route.path获取面包屑
export function mapPathToBreadcrumbs(menus: any[], path: string) {
  const breadcrumbs: any[] = []
  // 1.两层遍历
  for (const menu of menus) {
    for (const submenu of menu.children) {
      if (path === submenu.url) {
        breadcrumbs.push({ name: menu.name, path: menu.url })
        breadcrumbs.push({ name: submenu.name, path: submenu.url })
      }
    }
  }
  return breadcrumbs
}

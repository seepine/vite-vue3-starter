import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteRecordRaw
} from 'vue-router'

import Home from '@/views/home.vue'
import Vuex from '@/views/vuex.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('@/views/axios.vue') // 懒加载组件
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 赋值标题
router.beforeEach(
  (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    if (to.name) {
      document.title = `${String(to.meta.name ? to.meta.name : to.name)} - Starter`
    } else {
      document.title = 'Vite-Vue3-Starter'
    }
    next()
    // 进行权限拦截
    // if (store.state.token || to.fullPath === '/login') {
    //   next()
    // } else {
    //   next('/login')
    // }
  }
)

// 若有动态路由，在一开始就加载
// addRoutes(store.state.menus, router)

// const viewPage = import.meta.glob('/src/views/**/index.vue')
// router.addRoute('Home', {
//   path: item.path,
//   name: item.path,
//   meta: {
//     name: item.name,
//     keepAlive: item.keepAlive === '1'
//   },
//   component: viewPage[`/src/views${item.path}/index.vue`]
// })
export default router

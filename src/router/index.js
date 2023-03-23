import Vue from 'vue'
import VueRouter from 'vue-router'
import constantRoutes from './constant-routes'
import asyncRoutes from './async-routes'
import store from '@/store/index.js'

Vue.use(VueRouter)

const routes = [
  ...constantRoutes,
  ...asyncRoutes,
  { path: '/', redirect: '/home' },
  { path: '*', redirect: '/404' }
]
const router = new VueRouter({
  // mode:'history',
  routes
})
router.beforeEach(async(to, from, next) => {
  const token = localStorage.getItem('token')
  if (!token && to.name !== 'Login') {
    next({
      path: '/login'
    })
    return
  } else {
    document.title = to.meta.title
    store.commit('SET_TAG_VIEWS', {
      title: to.meta.title,
      name: to.name,
      path: to.path
    })
    next()
  }
})
router.afterEach(() => {
  window.scrollTo(0, 0)
})
export default router

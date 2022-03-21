import Vue from "vue";
import VueRouter from "vue-router";
import constantRoutes from "./constant-routes";
import asyncRoutes from "./async-router-routes";
Vue.use(VueRouter);

const routes = [
  ...constantRoutes,
  ...asyncRoutes,
  { path: "/", redirect: "/home" },
  { path: "*", redirect: "/404" },
];
const router = new VueRouter({
  // mode:'history',
  routes,
});
router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem('token')
  if (!token && to.name != 'Login') {
    next({
      path: '/login'
    })
    return
  } else {
    next()
  }
})
router.afterEach(() => {
  window.scrollTo(0, 0);
});
export default router;

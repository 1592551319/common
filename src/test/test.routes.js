import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/test", redirect: "/home" },
  { path: "*", redirect: "/404" },
];
const router = new VueRouter({
  // mode:'history',
  routes,
});
router.afterEach(() => {
  window.scrollTo(0, 0);
});
export default router;

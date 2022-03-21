export default [
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
    },
    component: () =>
      import(/* webpackChunkName:"Login" */ "@/views/Login/index.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () =>
      import(/* webpackChunkName:"404" */ "@/views/ErrorPage/404.vue"),
  },
];

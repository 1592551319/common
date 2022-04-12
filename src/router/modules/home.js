import Layout from "@/Layout/index.vue";
export default [
  {
    path: "/",
    name: "home",
    redirect: "/home",
    component: Layout,
    meta: {
      title: "首页",
    },
    children: [
      {
        path: "home",
        name: "homeIndex",
        component: (resolve) => {
          require(["@/views/Home/index.vue"], resolve);
        },
        meta: {
          title: "首页",
        },
      },
    ],
  },
];

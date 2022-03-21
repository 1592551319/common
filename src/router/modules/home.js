import Layout from "@/Layout/index.vue";
export default [
  {
    path: "/",
    name: "home",
    component: Layout,
    children: [
      {
        path: "/home",
        name: "homeIndex",
        component: (resolve) => {
          require(["@/views/Home/index.vue"], resolve);
        }
      }
    ]
  },
];

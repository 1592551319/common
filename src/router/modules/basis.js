import Layout from "@/Layout/index.vue";
export default [
  {
    path: "/basis",
    name: "basis",
    component: Layout,
    children: [
      {
        path: "/basis/directives",
        name: "/basis/directives",
        meta: {
          title: '指令'
        },
        component: (resolve) => {
          require(["@/views/Basis/directives.vue"], resolve);
        }
      }
    ]
  },
];

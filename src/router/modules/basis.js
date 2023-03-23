import Layout from '@/Layout/index.vue'
export default [
  {
    path: '/basis',
    name: 'basis',
    redirect: '/basis/directives',
    component: Layout,
    meta: {
      title: '基础功能'
    },
    children: [
      {
        path: 'directives',
        name: 'directives',
        meta: {
          title: '指令'
        },
        component: (resolve) => {
          require(['@/views/Basis/directives.vue'], resolve)
        }
      },
      {
        path: 'pro-table',
        name: 'pro-table',
        meta: {
          title: '超级表格'
        },
        component: (resolve) => {
          require(['@/views/Basis/pro-table.vue'], resolve)
        }
      }
    ]
  }
]

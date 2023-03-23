import Layout from '@/Layout/index.vue'
export default [
  {
    path: '/doc',
    name: 'doc',
    component: Layout,
    redirect: '/doc/vue',
    meta: {
      title: '文档'
    },
    children: [
      {
        path: 'vue',
        name: 'vue',
        component: (resolve) => {
          require(['@/views/Doc/Vue'], resolve)
        },
        meta: {
          title: 'vue文档'
        }
      },
      {
        path: 'vue3',
        name: 'vue3',
        component: (resolve) => {
          require(['@/views/Doc/Vue3'], resolve)
        },
        meta: {
          title: 'vue3文档'
        }
      },
      {
        path: 'view-design',
        name: 'view-design',
        component: (resolve) => {
          require(['@/views/Doc/ViewDesign'], resolve)
        },
        meta: {
          title: 'i-view'
        }
      },
      {
        path: 'note',
        name: 'note',
        component: (resolve) => {
          require(['@/views/Doc/Note'], resolve)
        },
        meta: {
          title: 'note'
        }
      }
    ]
  }
]

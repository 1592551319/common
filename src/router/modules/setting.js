import Layout from '@/Layout/index.vue'
export default [
  {
    path: '/setting',
    name: 'setting',
    component: Layout,
    redirect: '/setting/roles',
    meta: {
      title: '设置'
    },
    children: [
      {
        path: 'roles',
        name: 'roles',
        component: (resolve) => {
          require(['@/views/Setting/Roles'], resolve)
        },
        meta: {
          title: '角色管理'
        }
      },
      {
        path: 'permission',
        name: 'permission',
        component: (resolve) => {
          require(['@/views/Setting/Permission'], resolve)
        },
        meta: {
          title: '权限管理'
        }
      }
    ]
  }
]

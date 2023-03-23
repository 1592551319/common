import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedstate from 'vuex-persistedstate'
Vue.use(Vuex)
import tagViews from './modules/tagViews'
import rolesList from './modules/rolesList'
import theme from './modules/theme'
export default new Vuex.Store({
  state: {
    accessList: ['admin']
  },
  mutations: {},
  actions: {},
  modules: {
    tagViews,
    rolesList,
    theme
  },
  getters: {},
  plugins: [
    createPersistedstate({
      // 本地存储名字
      key: 'dxx-demo',
      // 指定需要存储的模块
      paths: ['tagViews', 'rolesList', 'theme']
    })
  ]
})

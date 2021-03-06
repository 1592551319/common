import Vue from "vue";
import Vuex from "vuex";
import createPersistedstate from "vuex-persistedstate";
Vue.use(Vuex);
import tagViews from "./modules/tagViews";

export default new Vuex.Store({
  state: {
    accessList: ["admin"],
  },
  mutations: {},
  actions: {},
  modules: {
    tagViews,
  },
  getters: {},
  plugins: [
    createPersistedstate({
      //本地存储名字
      key: "dxx-demo",
      //指定需要存储的模块
      paths: ["tagViews"],
    }),
  ],
});

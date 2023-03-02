import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import iview from "@/plugins/iview.js";
import "./assets/styles/theme.less";
import "./assets/styles/common.less";
import directives from "./directives";
Vue.use(iview);
Vue.use(directives);

Vue.config.productionTip = false;
console.log();
// const width = document.body.clientWidth
// if(width==375){
//   // console.log(window.location.origin+'/mobile.html#/');
//   window.location.href = window.location.origin+'/mobile.html#/'
// }
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

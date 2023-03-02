import Vue from "vue";
import App from "./test.vue";
import router from "./test.routes";
import iview from "@/plugins/iview.js";
import "../assets/styles/theme.less";
import "../assets/styles/common.less";
import directives from "../directives";
Vue.use(iview);
Vue.use(directives);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#test");

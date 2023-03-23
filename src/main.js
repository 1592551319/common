import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iview from '@/plugins/iview.js'
import './assets/styles/theme.less'
import './assets/styles/common.less'
import directives from './directives'

Vue.use(iview)
Vue.use(directives)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')

// "lint": "eslint --fix --ext .js,.vue src",
// "format": "prettier-eslint --write \"src/**/*.js\" \"src/**/*.vue\""

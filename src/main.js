import Vue from 'vue'
import App from './App.vue'
import RouterJs from "./Router.js"

Vue.config.productionTip = false
new Vue({
  router: RouterJs,
  render: h => h(App),
}).$mount('#app')

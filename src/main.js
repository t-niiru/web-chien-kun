import Vue from 'vue'
import ress from 'ress'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(ress)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'
import store from './config/store'
import './config/bootstrap'
import router from './config/router'
import './config/msg'
Vue.config.productionTip = false

//Temporario

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
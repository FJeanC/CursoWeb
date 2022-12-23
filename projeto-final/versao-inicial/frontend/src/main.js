import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'
import store from './config/store'
import './config/bootstrap'
import router from './config/router'
import './config/msg'
Vue.config.productionTip = false

//Temporario
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikpob24gRG9lIiwiZW1haWwiOiJqaG9uQGVtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2NzE3OTc0NDQsImV4cCI6MTY3MjA1NjY0NH0.V_VByYn5oecQ079R4J66qfpFHQfZh2Zv99n_c8tBygs'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
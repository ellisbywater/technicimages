import Vue from 'vue'
import Vuex from 'vuex'
import Buefy from 'buefy'
import App from './App.vue'
import store from './store'

import 'buefy/dist/buefy.css'
import './registerServiceWorker'

Vue.use(Vuex)
Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

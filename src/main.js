import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
//Vue.prototype.$logged_in = {value: false}
Vue.prototype.$logged_in = {value: true}
Vue.prototype.$user = {value: "testuser"}
Vue.prototype.$company = {value: "testcompany"}
Vue.prototype.$company_name = {value: "companyname"}
Vue.prototype.$project = {value: "project 1"}
Vue.prototype.$legal_expert = {value: "legal expert 1"}
Vue.prototype.$contractor = {value: "contractor 1"}
Vue.prototype.$greenhouse = {value: "greenhouse 1"}

// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: 'http://caic.sensorlab.tno.nl:8082',
//   vuex: {
//       store,
//       actionPrefix: 'SOCKET_',
//       mutationPrefix: 'SOCKET_'
//   },
//   options: { path: "/session" } //Optional options
// }))


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')


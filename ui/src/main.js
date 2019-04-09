import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify';

Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: '#00796B',
    secondary: '#004D40',
    accent: '#E0F2F1',
    error: '#D50000'
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

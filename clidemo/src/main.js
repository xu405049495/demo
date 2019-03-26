import Vue from 'vue'
import router from './router/index'
import App from './App.vue'

Vue.config.productionTip = false;
/* Vue.use(Router); */

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
/* import VueBus from 'vue-bus';

Vue.use(VueBus); */
const Bus=new Vue();

import "./assets/css/bootstrap.min.css"
import "./assets/css/index.css"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data:{
    Bus
  }
}).$mount('#app')

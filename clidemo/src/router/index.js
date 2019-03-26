import Vue from 'vue' //引入Vue
import Router from 'vue-router'
import Title from '@/components/title.vue'
import Title2 from '@/components/2.vue'
import Title3 from '@/components/3.vue'

Vue.use(Router);

export default new Router({
  routes: [ //配置路由，这里是个数组
    { //每一个链接都是一个对象
      path: '/', //链接路径
      name: 'Title', //路由名称，
      component: Title //对应的组件模板
    },
    { //每一个链接都是一个对象
      path: '/Title2', //链接路径
      name: 'Title2', //路由名称，
      component: Title2 //对应的组件模板
    },
    { //每一个链接都是一个对象
      path: '/Title3', //链接路径
      name: 'Title3', //路由名称，
      component: Title3 //对应的组件模板
    },

  ]


})
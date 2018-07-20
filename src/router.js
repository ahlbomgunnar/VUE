import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Bdc from './views/Bdc.vue'
import Up from './views/Up.vue'
import Ts from './views/Ts.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/bdc',
      name: 'bdc',
      component: Bdc
    },
    {
      path: '/up',
      name: 'up',
      component: Up
    },
    {
      path: '/ts',
      name: 'ts',
      component: Ts
    }
  ]
})

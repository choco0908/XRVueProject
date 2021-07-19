import Vue from 'vue'
import Router from 'vue-router'
import Aframe from '@/components/Aframe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Aframe',
      component: Aframe
    }
  ]
})

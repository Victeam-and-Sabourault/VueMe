import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Robotique from '@/components/Robotique/Robotique'
import Eclairage from '@/components/Eclairage/Eclairage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/robotique',
      name: 'Robotique',
      component: Robotique
    },
    {
      path: '/eclairage',
      name: 'Eclirage',
      component: Eclairage
    }
  ]
})

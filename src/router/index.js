import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main/Main'
import Robotique from '@/components/Robotique/Robotique'
import Eclairage from '@/components/Eclairage/Eclairage'
import Aspirateur from '@/components/Aspirateur/Aspirateur'
import Cafe from '@/components/Cafe/Cafe'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)

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
      name: 'Eclairage',
      component: Eclairage
    },
    {
      path: '/aspirateur',
      name: 'Aspirateur',
      component: Aspirateur
    },
    {
      path: '/cafe',
      name: 'Cafe',
      component: Cafe
    }
  ]
})

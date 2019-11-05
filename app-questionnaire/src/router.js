import Vue from 'vue'
import Router from 'vue-router'
import Questionnaire from './views/Questionnaire.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'profil',
      component: () => import(/* webpackChunkName: "profil" */ './views/Profil.vue')
    },
    {
      path: '/questionnaire',
      name: 'questionnaire',
      component: Questionnaire
    },
    {
      path: '/resultats',
      name: 'resultats',
      component: () => import(/* webpackChunkName: "resultats" */ './views/Resultats.vue')
    }
  ]
})

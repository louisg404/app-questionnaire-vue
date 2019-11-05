import Vue from 'vue'
import Router from 'vue-router'
import Questionnaire from './views/Questionnaire.vue'
import Resultats from './views/Resultats.vue'
import Profil from './views/Profil.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'profil',
      component: Profil
    },
    {
      path: '/questionnaire',
      name: 'questionnaire',
      component: Questionnaire
    },
    {
      path: '/resultats',
      name: 'resultats',
      component: Resultats
    }
  ]
})

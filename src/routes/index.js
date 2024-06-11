import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home.vue'
import company from './company.vue'
import strategy from './strategy.vue'
import incruit from './incruit.vue'
import contact from './contact.vue'

export default createRouter({
  // Hash
  // https://www.google.com/#/
  history: 
  createWebHashHistory(),
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
  // page
  // https://www.google.com/about
  routes: [
    {
      path:'/',
      name: Home,
      component: Home
    },
    {
      path:'/company',
      name: company,
      component: company
    },
    {
      path:'/strategy',
      name: strategy,
      component: strategy
    },
    {
      path:'/incruit',
      name: incruit,
      component: incruit
    },
    {
      path:'/contact',
      name: contact,
      component: contact
    }
  ]
})
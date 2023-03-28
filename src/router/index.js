import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Overview',
    props: true,
    component: () => import('../views/Overview.vue')
  },  
  {
    path: '/contract',
    name: 'Contract',
    component: () => import('../views/Contract.vue')
  },
  {
    path: '/legal',
    name: 'LegalExpert',
    component: () => import('../views/LegalExpert.vue')
  },  
  {
    path: '/final',
    name: 'finalContract',
    component: () => import('../views/finalContract.vue')
  },  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

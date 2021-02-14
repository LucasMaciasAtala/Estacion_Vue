import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Contact',
    name: 'Contacto',  
    component: () => import( '../views/Contact.vue')
  },
  {
    path: '/News',
    name: 'Noticias',
    component: () => import('../views/News.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

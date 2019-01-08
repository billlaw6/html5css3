import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Div from '../views/Div.vue'
import Structure from '../views/Structure.vue'
import Space from '../views/Space.vue'

Vue.use(VueRouter)

const routes = [
  {
    name: 'index',
    path: '/',
    component: Index
  },
  {
    name: 'div',
    path: '/div',
    component: Div
  },
  {
    name: 'structure',
    path: '/structure',
    component: Structure
  },
  {
    name: 'space',
    path: '/space',
    component: Space
  }
]

let router = new VueRouter({
  // mode: 'history',
  routes: routes
})

export default router

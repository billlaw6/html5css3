import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Div from '../views/Div.vue'
import Structure from '../views/Structure.vue'
import Space from '../views/Space.vue'
Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Index },
    { path: '/div', component: Div },
    { path: '/structure', component: Structure },
    { path: '/space', component: Space }
  ]
})


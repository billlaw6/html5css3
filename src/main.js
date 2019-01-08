import Vue from 'vue'
// router.js中的VueRouter不能替代此处引入
import VueRouter from 'vue-router'
import router from './router/index'
import App from './App.vue'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

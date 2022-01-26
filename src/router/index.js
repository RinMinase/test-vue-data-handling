import Vue from 'vue'
import VueRouter from 'vue-router'
import Parent from '../views/Parent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Parent
  },
]

const router = new VueRouter({
  routes
})

export default router

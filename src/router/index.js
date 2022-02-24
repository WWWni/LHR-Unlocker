import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const routes = [{
  path: '',
  component: () => import('@/components/home.vue'),
  name: 'home',
}, {
  path: '/two',
  component: () => import('@/components/two.vue'),
  name: 'two',
}, {
  path: '/two2',
  component: () => import('@/components/two2.vue'),
  name: 'two2',
}, {
  path: '/three',
  component: () => import('@/components/three.vue'),
  name: 'three',
}, {
  path: '/three2',
  component: () => import('@/components/three2.vue'),
  name: 'three2',
}, {
  path: '/fine',
  component: () => import('@/components/fine.vue'),
  name: 'fine',
}]



export default new Router({
  routes
})
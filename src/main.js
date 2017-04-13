import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import App from './App.vue'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  routes,
});

// router.beforeEach((to, from, next) => {
//
// });

new Vue({
  el: '#app',
  router,
  // jquery,
  render: h => h(App)
})

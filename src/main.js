import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import VueResource from 'vue-resource'
import routerconfig from './routerconfig.js'

//引入css，
// import './assets/css/animate.css'

Vue.use(VueRouter);
Vue.use(VueResource);
const router = new VueRouter(routerconfig);
const resource = new VueResource(routerconfig);
new Vue({
  router,resource,
  el: '#app',
  render: h => h(App)
})

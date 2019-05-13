import VueRouter from 'vue-router'
import App from './App.vue'
import './plugins/vuetify'
import Vue from 'vue'

// views
  import Home from './views/Home';

const routes = [
  { path: '/', component: Home }
]

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({routes});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

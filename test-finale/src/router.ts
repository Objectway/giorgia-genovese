import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Prospect from './views/Prospect.vue'
import PersonaFisica from './views/PersonaFisica.vue'
import GetPassword from './views/GetPassword.vue'
import router from './router';
import store from './store.js';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/listUser',
      name: 'listUser',
      component: () => import( './views/ListUser.vue'),
    },
     {
       path: '/prospect',
       name: 'prospect',
       component: Prospect,
     },
     {
       path: '/personafisica',
       name: 'personafisica',
       component: PersonaFisica,
     },
     {
       path: '/getpassword',
       name: 'getpassword',
       component: GetPassword,
     },
  ],
});

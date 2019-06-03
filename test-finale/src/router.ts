import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
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
      path: '/newUser',
      name: 'newUser',
      
      component: () => import( './views/NewUser.vue'),
    },
  ],
});
// router.beforeEach((to, from, next) => {
//   if (to.fullPath === '/') {
//     if ($store.getters.getAccess) {
//       next('/newUser');
//     }
//   }
// });

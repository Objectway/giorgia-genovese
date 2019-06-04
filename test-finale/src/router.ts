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
      path: '/listUser',
      name: 'listUser',
      
      component: () => import( './views/ListUser.vue'),
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

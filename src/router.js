import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import TakeNotes from './components/TakeNotes.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/take-notes',
      name: 'take-notes',
      component: TakeNotes
    },
  ],
});

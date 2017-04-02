import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home.vue';
import About from '@/components/pages/About.vue';
import Admin from '@/components/pages/Admin.vue';
import Discussions from '@/components/pages/Discussions.vue';
import Listmaster from '@/components/pages/Listmaster.vue';
import Profile from '@/components/pages/Profile.vue';
import Settings from '@/components/pages/Settings.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
  }, {
    path: '/about',
    name: 'about',
    component: About,
  }, {
    path: '/admin',
    name: 'admin',
    component: Admin,
  }, {
    path: '/discussions',
    name: 'discussions',
    component: Discussions,
  }, {
    path: '/listmaster',
    name: 'listmaster',
    component: Listmaster,
  }, {
    path: '/profile',
    name: 'profile',
    component: Profile,
  }, {
    path: '/settings',
    name: 'settings',
    component: Settings,
  }],
});

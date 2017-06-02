import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';

import Dashboard from '@/components/pages/Dashboard.vue';
import About from '@/components/pages/About.vue';
import Admin from '@/components/pages/Admin.vue';
import Discussions from '@/components/pages/Discussions.vue';
import DiscussionsSubscribed from '@/components/pages/DiscussionsSubscribed.vue';
import Listmaster from '@/components/pages/Listmaster.vue';
import Profile from '@/components/pages/Profile.vue';
import Settings from '@/components/pages/Settings.vue';

Vue.use(Router);
Vue.use(Meta);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: Dashboard,
  }, {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: 'About/Help',
    },
  }, {
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta: {
      title: 'Administration',
    },
  }, {
    path: '/discussions',
    name: 'discussions',
    component: Discussions,
    meta: {
      title: 'Discussions',
    },
  }, {
    path: '/discussions/subscribed',
    name: 'discussionsSubscribed',
    component: DiscussionsSubscribed,
    meta: {
      title: 'Discussions',
    },
  }, {
    path: '/listmaster',
    name: 'listmaster',
    component: Listmaster,
    meta: {
      title: 'Listmaster Admin',
    },
  }, {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      title: 'Profile',
    },
  }, {
    path: '/settings',
    name: 'settings',
    component: Settings,
    meta: {
      title: 'Settings',
    },
  }],
});

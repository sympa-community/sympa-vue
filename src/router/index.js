import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';

// Headers
import DefaultHeader from '@/components/headers/Default.vue';
import DiscussionsHeader from '@/components/headers/Discussions.vue';
import ListmasterHeader from '@/components/headers/Listmaster.vue';

// Pages
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
    components: {
      default: Dashboard,
      header: DefaultHeader,
    },
  }, {
    path: '/about',
    name: 'about',
    components: {
      default: About,
      header: DefaultHeader,
    },
    meta: {
      title: 'About/Help',
    },
  }, {
    path: '/admin',
    name: 'admin',
    components: {
      default: Admin,
      header: DefaultHeader,
    },
    meta: {
      title: 'Administration',
    },
  }, {
    path: '/discussions',
    name: 'discussions',
    components: {
      default: Discussions,
      header: DiscussionsHeader,
    },
    meta: {
      title: 'Discussions',
    },
  }, {
    path: '/discussions/subscribed',
    name: 'discussionsSubscribed',
    components: {
      default: DiscussionsSubscribed,
      header: DiscussionsHeader,
    },
    meta: {
      title: 'Discussions',
    },
  }, {
    path: '/listmaster',
    name: 'listmaster',
    components: {
      default: Listmaster,
      header: ListmasterHeader,
    },
    meta: {
      title: 'Listmaster Admin',
    },
  }, {
    path: '/profile',
    name: 'profile',
    components: {
      default: Profile,
      header: DefaultHeader,
    },
    meta: {
      title: 'Profile',
    },
  }, {
    path: '/settings',
    name: 'settings',
    components: {
      default: Settings,
      header: DefaultHeader,
    },
    meta: {
      title: 'Settings',
    },
  }],
});

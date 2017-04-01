import Vue from 'vue';
import App from '@/components/App.vue';

import router from './router';
import store from './store';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: App.render,
  router,
  store,
});

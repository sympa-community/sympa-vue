import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';

import App from '@/components/App.vue';

import router from './router';
import store from './store';

Vue.use(VueMaterial);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: App.render,
  router,
  store,
});

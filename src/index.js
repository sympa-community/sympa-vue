import Vue from 'vue';

import App from '@/components/App.vue';

// Globally register app
window.app = new Vue(App);
window.app.$mount('#app');

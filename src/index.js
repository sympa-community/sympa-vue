import Vue from 'vue';
import App from '@/components/App.vue';

// Register UI
import Button from '@/components/layout/ui/Button.vue';
import Menu from '@/components/layout/ui/Menu.vue';
import MenuItem from '@/components/layout/ui/MenuItem.vue';

Vue.component('sympa-button', Button);
Vue.component('sympa-menu', Menu);
Vue.component('sympa-menu-item', MenuItem);

// Globally register app
window.app = new Vue(App);
window.app.$mount('#app');

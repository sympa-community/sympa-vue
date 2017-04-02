<template>
  <div id="app">
    <app-shell v-if="logged" />
    <login-form v-else />
  </div>
</template>

<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';

import router from '@/router';
import store from '@/store';

import AppShell from '@/components/layout/AppShell.vue';
import LoginForm from '@/components/layout/LoginForm.vue';

// @TODO: Move those imports somewhere else
Vue.use(require('vue-material/dist/components/mdCore'));

Vue.use(require('vue-material/dist/components/mdAvatar'));
Vue.use(require('vue-material/dist/components/mdBackdrop'));
Vue.use(require('vue-material/dist/components/mdButton'));
Vue.use(require('vue-material/dist/components/mdCard'));
Vue.use(require('vue-material/dist/components/mdDivider'));
Vue.use(require('vue-material/dist/components/mdIcon'));
Vue.use(require('vue-material/dist/components/mdInputContainer'));
Vue.use(require('vue-material/dist/components/mdLayout'));
Vue.use(require('vue-material/dist/components/mdList'));
Vue.use(require('vue-material/dist/components/mdSidenav'));
Vue.use(require('vue-material/dist/components/mdToolbar'));


export default {
  name: 'app',
  router,
  store,
  components: {
    AppShell,
    LoginForm,
  },
  computed: mapGetters('auth', ['logged']),
};
</script>

<style>
/* @TODO: Move those imports somewhere else */
@import "~vue-material/dist/components/mdCore/index.css";

@import "~vue-material/dist/components/mdAvatar/index.css";
@import "~vue-material/dist/components/mdBackdrop/index.css";
@import "~vue-material/dist/components/mdButton/index.css";
@import "~vue-material/dist/components/mdCard/index.css";
@import "~vue-material/dist/components/mdDivider/index.css";
@import "~vue-material/dist/components/mdIcon/index.css";
@import "~vue-material/dist/components/mdInputContainer/index.css";
@import "~vue-material/dist/components/mdLayout/index.css";
@import "~vue-material/dist/components/mdList/index.css";
@import "~vue-material/dist/components/mdSidenav/index.css";
@import "~vue-material/dist/components/mdToolbar/index.css";

html, body {
  margin: 0;
  padding: 0;
}
</style>

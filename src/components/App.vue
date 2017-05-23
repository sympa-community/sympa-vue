<template>
  <div id="app">
    <app-shell v-if="logged" />
    <login-form v-else />
  </div>
</template>

<script>
import Vue from 'vue';
import VueMaterial from 'vue-material';

import { mapGetters } from 'vuex';

import router from '@/router';
import store from '@/store';

import AppShell from '@/components/layout/AppShell.vue';
import LoginForm from '@/components/layout/LoginForm.vue';

// @TODO: Move those imports somewhere else
Vue.use(VueMaterial);

// Disable (for now) ink ripple for performance reasons
Vue.material.inkRipple = false;


export default {
  name: 'app',
  router,
  store,
  components: {
    AppShell,
    LoginForm,
  },
  computed: mapGetters('auth', ['logged']),
  metaInfo() {
    return {
      title: this.$route.meta.title,
      titleTemplate: `${((this.$route.meta.title) ? '%s | ' : '')} Sympa`,
    };
  },
};
</script>

<style>
/* @TODO: Move those imports somewhere else */
@import "~vue-material/dist/vue-material.css";

html, body {
  margin: 0;
  padding: 0;
}

/* Disable (for now) ink ripple for performance reasons */
.md-ink-ripple {
  display: none;
}
</style>

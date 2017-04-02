<template>
  <div id="app">
    <sidebar ref="sidebar" />
    <md-toolbar>
      <md-button class="md-icon-button hamburger" @click.native="toggleSidebar">
        <md-icon>menu</md-icon>
      </md-button>
      <h1 class="md-title">Sympa</h1>
      <md-button class="md-icon-button">
        <md-icon>more_vert</md-icon>
      </md-button>
    </md-toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';

import router from '@/router';
import store from '@/store';

import Sidebar from '@/components/layout/Sidebar.vue';

// @TODO: Move those imports somewhere else
Vue.use(require('vue-material/dist/components/mdCore'));

Vue.use(require('vue-material/dist/components/mdAvatar'));
Vue.use(require('vue-material/dist/components/mdButton'));
Vue.use(require('vue-material/dist/components/mdDivider'));
Vue.use(require('vue-material/dist/components/mdIcon'));
Vue.use(require('vue-material/dist/components/mdList'));
Vue.use(require('vue-material/dist/components/mdSidenav'));
Vue.use(require('vue-material/dist/components/mdToolbar'));
Vue.use(require('vue-material/dist/components/mdBackdrop'));
Vue.use(require('vue-material/dist/components/mdCard'));
Vue.use(require('vue-material/dist/components/mdLayout'));


export default {
  name: 'app',
  router,
  store,
  components: {
    Sidebar,
  },
  methods: {
    toggleSidebar() {
      this.$refs.sidebar.toggle();
    },
  },
};
</script>

<style>
/* @TODO: Move those imports somewhere else */
@import "~vue-material/dist/components/mdCore/index.css";

@import "~vue-material/dist/components/mdAvatar/index.css";
@import "~vue-material/dist/components/mdButton/index.css";
@import "~vue-material/dist/components/mdDivider/index.css";
@import "~vue-material/dist/components/mdIcon/index.css";
@import "~vue-material/dist/components/mdList/index.css";
@import "~vue-material/dist/components/mdSidenav/index.css";
@import "~vue-material/dist/components/mdToolbar/index.css";
@import "~vue-material/dist/components/mdBackdrop/index.css";
@import "~vue-material/dist/components/mdCard/index.css";
@import "~vue-material/dist/components/mdLayout/index.css";

html, body {
  margin: 0;
  padding: 0;
}
.md-toolbar > .md-title {
  flex: 1;
}
@media screen and (min-width: 1281px) {
  #app {
    padding-left: 280px;
  }
  .hamburger {
    display: none;
  }
  .md-toolbar > .md-title {
    padding-left: 25px;
  }
}
</style>

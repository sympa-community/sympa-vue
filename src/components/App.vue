<template>
  <div id="app">
    <sidebar ref="sidebar" />
    <md-toolbar>
      <md-button class="md-icon-button" @click.native="toggleSidebar">
        <md-icon>menu</md-icon>
      </md-button>
      <h1 class="md-title">Sympa</h1>
    </md-toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Sidebar from './layout/Sidebar';

export default {
  name: 'app',
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
html, body {
  margin: 0;
  padding: 0;
}
</style>

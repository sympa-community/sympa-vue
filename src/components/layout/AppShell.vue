<template>
  <main>
    <sidebar ref="sidebar" />
    <md-toolbar>
      <md-button class="md-icon-button hamburger" @click.native="toggleSidebar">
        <md-icon>menu</md-icon>
      </md-button>
      <h1 class="md-title">{{ $route.meta.title || "Sympa" }}</h1>
      <md-button class="md-icon-button">
        <md-icon>more_vert</md-icon>
      </md-button>
    </md-toolbar>
    <router-view></router-view>
  </main>
</template>

<script>
import Sidebar from '@/components/layout/Sidebar.vue';

export default {
  name: 'app-shell',
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
.md-toolbar > .md-title {
  flex: 1;
}
.page-content {
  padding: 25px;
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
  .page-content {
    padding: 18px 48px;
  }
}
</style>

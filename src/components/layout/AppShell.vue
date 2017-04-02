<template>
  <main>
    <sidebar ref="sidebar" />
    <md-toolbar>
      <md-button class="md-icon-button" @click.native="toggleSidebar">
        <md-icon>menu</md-icon>
      </md-button>
      <h1 class="md-title">Sympa</h1>
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

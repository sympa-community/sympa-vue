<template>
  <main>
    <sidebar ref="sidebar" />
    <div class="main-container">
      <md-toolbar>
        <md-button class="md-icon-button hamburger" @click.native="toggleSidebar">
          <md-icon>menu</md-icon>
        </md-button>
        <h1 class="md-title">{{ $route.meta.title || "Sympa" }}</h1>
        <md-button class="md-icon-button">
          <md-icon>more_vert</md-icon>
        </md-button>
      </md-toolbar>
      <section class="page-content">
        <router-view></router-view>
      </section>
    </div>
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

.main-container {
  height: 100vh;
  background-color: #F5F5F5;
}

.page-content {
  padding: 25px;
}

@media screen and (min-width: 1281px) {
  .main-container {
    margin-left: 280px;
  }
  .page-content {
    padding: 18px 48px;
  }
}
</style>

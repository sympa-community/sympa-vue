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
        <transition name="fade" appear mode="out-in">
          <router-view></router-view>
        </transition>
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
.md-backdrop.md-sidenav-backdrop {
  position: fixed;
}
.md-toolbar > .md-title {
  flex: 1;
}
.main-container {
  height: 100vh;
}
.page-content {
  min-height: calc(100vh - 64px);
  padding: 25px;
  background-color: #F5F5F5;
}
.fade-enter-active, .fade-leave-active {
  transform: translate3d(0, 0, 0);
  transition: opacity .2s, transform .2s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translate3d(0, 20px, 0)!important;
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

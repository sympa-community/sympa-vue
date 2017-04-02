<template>
  <md-sidenav class="md-left" ref="sidebar">
    <md-toolbar md-theme="white">
      <md-button class="md-icon-button" @click.native="toggleSidebar">
        <img src="../../assets/logo.svg" alt="">
      </md-button>
      <h2>SYMPA</h2>
    </md-toolbar>
    <md-divider></md-divider>
    <md-list-item class="md-double-line">
      <md-avatar>
        <img src="//placehold.it/40x40" alt="avatar">
      </md-avatar>
      <div class="md-list-text-container">
        <span>John Doe</span>
        <span>john.doe@example.com</span>
      </div>
      <md-button class="md-icon-button md-list-action">
        <md-icon>keyboard_arrow_down</md-icon>
      </md-button>
    </md-list-item>
    <md-divider></md-divider>
    <md-list-item>
      <router-link :to="{name: 'home'}">
        <md-icon>dashboard</md-icon>
        <span>Dashboard</span>
      </router-link>
    </md-list-item>
    <md-list-item>
      <router-link :to="{name: 'discussions'}">
        <md-icon>forum</md-icon>
        <span>Discussions</span>
      </router-link>
    </md-list-item>
    <md-divider></md-divider>
    <md-list-item>
      <router-link :to="{name: 'admin'}">
        <md-icon>work</md-icon>
        <span>Administration</span>
      </router-link>
    </md-list-item>
    <md-list-item>
      <router-link :to="{name: 'listmaster'}">
        <md-icon>list</md-icon>
        <span>Listmaster Admin</span>
      </router-link>
    </md-list-item>
    <md-list-item>
      <router-link :to="{name: 'profile'}">
        <md-icon>person</md-icon>
        <span>Profile</span>
      </router-link>
    </md-list-item>
    <md-list-item>
      <router-link :to="{name: 'settings'}">
        <md-icon>settings</md-icon>
        <span>Settings</span>
      </router-link>
    </md-list-item>
    <md-list-item>
      <router-link :to="{name: 'about'}">
        <md-icon>help</md-icon>
        <span>About/Help</span>
      </router-link>
    </md-list-item>
  </md-sidenav>
</template>

<script>
export default {
  name: 'sidebar',
  methods: {
    toggle() {
      this.$refs.sidebar.toggle();
    },
  },
};
</script>

<style>
.md-sidenav-content {
  list-style-type: none;
}
.md-sidenav-content .md-toolbar h2 {
  font-weight: 100;
}
@media screen and (min-width: 1281px) {
  .md-sidenav-content {
    transform: translate3d(0,0,0) !important;
    pointer-events: auto !important;
    box-shadow: 0 1px 5px rgba(0,0,0,.25) !important;
  }
  .md-sidenav-backdrop {
    display: none;
  }
}
</style>

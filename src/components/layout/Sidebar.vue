<template>
  <md-sidenav class="md-left" ref="sidebar">
    <md-toolbar md-theme="white">
      <img src="../../assets/logo.svg" alt="">
      <h2>SYMPA</h2>
    </md-toolbar>
    <md-divider></md-divider>
    <md-list-item class="md-double-line">
      <md-avatar>
        <img src="//placehold.it/40x40" alt="avatar">
      </md-avatar>
      <div class="md-list-text-container">
        <b>{{ fullname }}</b>
        <span>{{ email }}</span>
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
import { mapGetters } from 'vuex';

export default {
  name: 'sidebar',
  methods: {
    toggle() {
      this.$refs.sidebar.toggle();
    },
  },
  computed: mapGetters('auth', ['fullname', 'email']),
};
</script>

<style>
.md-list-item .md-list-item-container {
  font-weight: 500;
  color: #4F4F4F;
  font-size: 15px;
  line-height: 48px;
}

.md-divider {
  margin: 8px 0;
}

.md-sidenav .md-sidenav-content {
  list-style-type: none;
  width: 280px;
}

.md-sidenav-content .md-toolbar img {
  height: 32px;
  width: 32px;
  margin: 16px;
}

.md-sidenav-content .md-toolbar + .md-divider {
  margin-top: 0;
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

<template>
  <md-sidenav class="md-left" ref="sidebar">
    <md-toolbar>
      <h3>SYMPA</h3>
    </md-toolbar>
    <md-list-item>
      <md-avatar>
        <img src="" alt="">
      </md-avatar>
      <span>John Doe</span>

    </md-list-item>
    <md-divider></md-divider>
    <md-list-item>
      <router-link>
        <md-icon>dashboard</md-icon>
        <span>Dashboard</span>
      </router-link>
    </md-list-item>
    <md-list-item>
      <router-link>
        <md-icon>forum</md-icon>
        <span>Discussions</span>
      </router-link>
    </md-list-item>
    <md-divider></md-divider>
    <md-list-item>
      <router-link>
        <md-icon>work</md-icon>
        <span>Administration</span>
      </router-link>
    </md-list-item>
    <md-list-item>
      <router-link>
        <md-icon>list</md-icon>
        <span>Listmaster Admin</span>
      </router-link>
    </md-list-item>
    <md-list-item>
      <router-link>
        <md-icon>person</md-icon>
        <span>Profile</span>
      </router-link>
    </md-list-item>
    <md-list-item>
      <router-link>
        <md-icon>settings</md-icon>
        <span>Settings</span>
      </router-link>
    </md-list-item>
    <md-list-item>
      <router-link>
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

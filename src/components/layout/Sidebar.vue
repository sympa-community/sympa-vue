<template>
  <md-sidenav class="md-left" ref="sidebar">
    <md-toolbar md-theme="white">
      <img src="../../assets/logo.svg" alt="">
      <h2>SYMPA</h2>
    </md-toolbar>
    <md-divider></md-divider>
    <md-list class="sidebar-user">
      <md-list-item class="md-double-line">
        <md-avatar>
          <img :src="picture" alt="avatar">
        </md-avatar>
        <div class="sidebar-user-meta">
          <div class="sidebar-user-fullname">{{ fullname }}</div>
          <div class="sidebar-user-email">{{ email }}</div>
        </div>

        <md-list-expand>
          <md-list>
            <md-list-item @click.native="logout">
              Logout
            </md-list-item>
          </md-list>
        </md-list-expand>
      </md-list-item>
    </md-list>
    <md-divider />
    <md-list>
      <md-list-item>
        <router-link exact :to="{name: 'home'}">
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
    </md-list>
    <md-divider />
    <md-list>
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
    </md-list>
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
    logout() {
      this.$store.dispatch('auth/logout');
    },
  },
  computed: mapGetters('auth', ['fullname', 'email', 'picture']),
};
</script>

<style>
.md-list.md-no-padding {
  padding: 0;
}

.md-list-item .md-list-item-container {
  font-weight: 500;
  color: #4F4F4F;
  font-size: 15px;
  line-height: 48px;
}

.md-sidenav .md-sidenav-content {
  width: 280px;
}

.md-sidenav-content, .md-list {
  /* @TODO: move this in the vue-material theme */
  background-color: #FAFAFA!important;
}

.md-sidenav-content .md-toolbar img {
  height: 32px;
  width: 32px;
  margin: 16px;
}

.md-sidenav-content .md-toolbar h2 {
  font-weight: 300;
  font-size: 18px;
}

.sidebar-user {
  padding: 0;
}

.sidebar-user > .md-list-item {
  min-height: 64px;
}

.sidebar-user-meta {
  line-height: 18px;
  margin: 14px 0;
  font-size: 14px;
}

.sidebar-user-email {
  font-weight: 400;
}

@media screen and (min-width: 1281px) {
  .md-sidenav-content {
    transform: translate3d(0,0,0) !important;
    pointer-events: auto !important;
    box-shadow: 0 9px 18px 0 rgba(0,0,0,0.18), 0 5px 5px 0 rgba(0,0,0,0.24)!important;
  }
  .md-sidenav-backdrop {
    display: none;
  }
}
</style>

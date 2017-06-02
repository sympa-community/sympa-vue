<template>
  <div class="mdl-layout__drawer" id="sidebar">
    <div class="sidebar-header">
      <img src="../../assets/logo.svg" class="sidebar-logo" alt="">
      <span class="mdl-layout-title sidebar-title">SYMPA</span>
    </div>
    <nav class="mdl-navigation sidebar-nav">
      <hr class="sidebar-divider" v-if="logged">
      <expand-list-two v-if="logged">
        <div>
          <img :src="picture" class="mdl-list__item-avatar" alt="avatar">
          <span>{{ fullname }}</span>
          <span class="mdl-list__item-sub-title">{{ email }}</span>
        </div>
        <div slot="expand">
          <div class="mdl-list__item expand-list-item" @click="logout">
            <span class="mdl-navigation__link mdl-list__item sidebar-item mdl-list__item-primary-content">
              Logout
            </span>
          </div>
        </div>
      </expand-list-two>
      <hr class="sidebar-divider">
      <router-link exact :to="{name: 'home'}" class="mdl-navigation__link mdl-list__item sidebar-item">
        <span class="mdl-list__item-primary-content">
          <i class="material-icons mdl-list__item-icon">dashboard</i>
          Dashboard
        </span>
      </router-link>
      <router-link :to="{name: 'discussions'}" class="mdl-navigation__link mdl-list__item sidebar-item">
        <span class="mdl-list__item-primary-content">
          <i class="material-icons mdl-list__item-icon">forum</i>
          Discussions
        </span>
      </router-link>
      <hr class="sidebar-divider">
      <router-link :to="{name: 'admin'}" class="mdl-navigation__link mdl-list__item sidebar-item">
        <span class="mdl-list__item-primary-content">
          <i class="material-icons mdl-list__item-icon">work</i>
          Administration
        </span>
      </router-link>
      <router-link :to="{name: 'listmaster'}" class="mdl-navigation__link mdl-list__item sidebar-item">
        <span class="mdl-list__item-primary-content">
          <i class="material-icons mdl-list__item-icon">list</i>
          Listmaster Admin
        </span>
      </router-link>
      <router-link :to="{name: 'profile'}" class="mdl-navigation__link mdl-list__item sidebar-item">
        <span class="mdl-list__item-primary-content">
          <i class="material-icons mdl-list__item-icon">person</i>
          Profile
        </span>
      </router-link>
      <router-link :to="{name: 'settings'}" class="mdl-navigation__link mdl-list__item sidebar-item">
        <span class="mdl-list__item-primary-content">
          <i class="material-icons mdl-list__item-icon">settings</i>
          Settings
        </span>
      </router-link>
      <router-link :to="{name: 'about'}" class="mdl-navigation__link mdl-list__item sidebar-item">
        <span class="mdl-list__item-primary-content">
          <i class="material-icons mdl-list__item-icon">help</i>
          About/Help
        </span>
      </router-link>
    </nav>
  </div>
<!--   <md-sidenav class="md-left" ref="sidebar">
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

    </md-list>
  </md-sidenav> -->
</template>

<script>
import ExpandListTwo from '@/components/layout/ExpandListTwo.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'sidebar',
  methods: {
    logout() {
      this.$store.dispatch('auth/logout');
    },
  },
  computed: mapGetters('auth', ['fullname', 'email', 'picture', 'logged']),
  watch: {
    $route() {
      if (!this.$isServer) {
        // close the sidebar when the route is changing
        document.getElementById('sidebar').classList.remove('is-visible');
        document.querySelector('.mdl-layout__obfuscator').classList.remove('is-visible');
      }
    },
  },
  components: {
    ExpandListTwo,
  },
};
</script>

<style>
.sidebar-logo {
  display: inline-block;
  height: 32px;
  width: 32px;
  margin: 16px;
}
.sidebar-title {
  display: inline-block;
  font-weight: 300;
  font-size: 18px;
}
.sidebar-nav {
  padding-top: 0 !important;
}
.sidebar-divider {
  margin: 0;
}
.sidebar-item {
  padding: 16px !important;
}
.sidebar-item.router-link-active, .sidebar-item.router-link-active i {
  color: rgb(63,81,181) !important;
}
.mdl-layout__drawer {
  width: 256px;
  transform: translateX(-256px);
}
.expand-list-item {
  margin: -16px;
  padding: 0 !important;
}
.expand-list-item > span {
  cursor: pointer !important;
}
@media screen and (min-width: 960px) {
  .mdl-layout__drawer {
    left: -256px;
    transform: translateX(0);
  }
}
</style>

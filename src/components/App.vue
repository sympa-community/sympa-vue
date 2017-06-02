<template>
  <div id="app" class="mdl-layout mdl-js-layout mdl-layout--fixed-header">

    <!-- Sidebar -->
    <sidebar ref="sidebar" />

    <!-- Header -->
    <header class="mdl-layout__header <!-- mdl-layout__header--waterfall -->">
      <div class="mdl-layout__header-row">

        <!-- Title -->
        <span class="mdl-layout-title header-title">{{ $route.meta.title || "Sympa" }}</span>
        <div class="mdl-layout-spacer"></div>

        <!-- Actions -->
        <button class="mdl-button mdl-js-button mdl-button--icon">
          <i class="material-icons">refresh</i>
        </button>
        <button id="header-menu-lower-right" class="mdl-button mdl-js-button mdl-button--icon">
          <i class="material-icons">more_vert</i>
        </button>

        <!-- Menu -->
        <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="header-menu-lower-right">
          <li class="mdl-menu__item">Some Action</li>
          <li class="mdl-menu__item">Another Action</li>
          <li disabled class="mdl-menu__item">Disabled Action</li>
          <li class="mdl-menu__item">Yet Another Action</li>
        </ul>
      </div>

      <!-- Tabs -->
      <!-- <div class="mdl-layout__tab-bar mdl-js-ripple-effect">
        <a href="#scroll-tab-1" class="mdl-layout__tab">Details</a>
        <a href="#scroll-tab-2" class="mdl-layout__tab is-active">Data sources</a>
        <a href="#scroll-tab-3" class="mdl-layout__tab">Miscellaneous</a>
      </div> -->
    </header>

    <main class="mdl-layout__content">
      <transition name="fade" appear mode="out-in">
        <router-view v-if="logged"></router-view>
        <login-form v-else></login-form>
      </transition>
    </main>
  </div>
</template>

<script>
import Vue from 'vue';

import VueMdl from 'vue-mdl';
import { mapGetters } from 'vuex';

import router from '@/router';
import store from '@/store';

import Sidebar from '@/components/layout/Sidebar.vue';
import LoginForm from '@/components/layout/LoginForm.vue';

Vue.use(VueMdl);

export default {
  name: 'app',
  router,
  store,
  components: {
    Sidebar,
    LoginForm,
  },
  computed: mapGetters('auth', ['logged']),
  metaInfo() {
    return {
      title: this.$route.meta.title,
      titleTemplate: `${((this.$route.meta.title) ? '%s | ' : '')} Sympa`,
    };
  },
};
</script>

<style>
body {
  background-color: #f5f5f5;
}
.page-title {
  margin: 15px 8px 0 8px;
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
  color: #999;
}
.page-list {
  margin: 0;
  padding-bottom: 0;
  border-bottom: 3px solid #999;
}
.page-list > li {
  background-color: #fff;
  border-top: 1px solid #999;
}
.button-fixed-bottom-right {
  position: fixed;
  right: 25px;
  bottom: 25px;
}
@media screen and (min-width: 960px) {
  .mdl-layout__container {
    left: 256px;
    width: calc(100% - 256px);
    overflow-x: visible;
  }
  .mdl-layout {
    overflow: visible;
  }
  .mdl-layout__obfuscator {
    display: none;
  }
  .mdl-layout__content {
    overflow-y: auto!important;
    overflow-x: hidden!important;
  }
  .mdl-layout__drawer-button, .mdl-layout__tab-bar-left-button {
    display: none;
  }
  .mdl-layout__header-row {
    padding-left: 24px;
  }
  header .mdl-layout__tab-bar {
    padding-left: 0;
  }
}

/* Transition */
.fade-enter-active, .fade-leave-active {
  transform: translate3d(0, 0, 0);
  transition: opacity .2s, transform .2s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translate3d(0, 20px, 0) !important;
}
</style>

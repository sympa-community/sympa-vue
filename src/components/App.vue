<template>
  <div id="app" class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <!-- Sidebar -->
    <sidebar ref="sidebar" />

    <!-- Header -->
    <router-view name="header"></router-view>

    <main class="mdl-layout__content">
      <transition name="fade" appear mode="out-in" v-on:after-enter="upgradeDom">
        <router-view v-if="logged"></router-view>
        <login-form v-else></login-form>
      </transition>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import router from '@/router';
import store from '@/store';

// Layout
import Sidebar from '@/components/layout/Sidebar.vue';
import LoginForm from '@/components/layout/LoginForm.vue';

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
  methods: {
    upgradeDom() {
      window.componentHandler.upgradeDom();
    },
  },
  updated() {
    window.componentHandler.upgradeDom();
  },
};
</script>

<style>
body {
  background-color: #f5f5f5;
}

main {
  z-index: auto !important;
}

.page-title {
  margin: 15px 8px 8px 8px;
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
  color: #999;
}

.page-list {
  margin: 0;
  padding-top: 0;
  padding-bottom: 0;
  border-bottom: 3px solid #d8d8d8;
}

.page-list > li {
  color: #666;
  background-color: #fff;
  border-top: 1px solid #d8d8d8;
  overflow: visible;
}

.page-list > li:hover {
  background-color: #e3e3e3;
}

.txt-error {
  color: #d0011b !important;
}

.txt-success {
  color: #65A026 !important;
}

.txt-bold {
  font-weight: bold !important;
}

header .mdl-layout__tab-bar {
  height: 48px;
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

  .mdl-layout__drawer-button,
  .mdl-layout__tab-bar-left-button {
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

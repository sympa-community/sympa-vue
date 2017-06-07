<template>
  <header class="mdl-layout__header">
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
    <div class="mdl-layout__tab-bar">
      <router-link exact :to="{name: 'discussions'}" exact-active-class="is-active" class="mdl-layout__tab">
        Favorites
      </router-link>
      <router-link exact :to="{name: 'discussionsSubscribed'}" exact-active-class="is-active" class="mdl-layout__tab">
        Subscribed
      </router-link>
      <router-link exact :to="{name: 'discussions'}" exact-active-class="is-active" class="mdl-layout__tab">
        All
      </router-link>
    </div>
  </header>
</template>

<script>
import router from '@/router';

export default {
  name: 'header-discussions',
  router,
};
</script>

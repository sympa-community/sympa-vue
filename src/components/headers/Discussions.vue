<template>
  <top>
    <!-- Actions -->
    <sympa-button ripple icon="refresh" icon-only></sympa-button>

    <!-- Menu -->
    <sympa-menu>
      <sympa-menu-item>Some action</sympa-menu-item>
      <sympa-menu-item>Another action</sympa-menu-item>
      <sympa-menu-item disabled>Disabled action</sympa-menu-item>
      <sympa-menu-item>Yet Another action</sympa-menu-item>
    </sympa-menu>

    <!-- Tabs -->
    <div class="mdl-layout__tab-bar" slot="tabs">
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
  </top>
</template>

<script>
import Top from '@/components/layout/Top.vue';

export default {
  name: 'header-discussions',
  components: {
    Top,
  },
};
</script>

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
      <router-link exact :to="{name: 'listmaster'}" active-class="is-active" class="mdl-layout__tab">
        Summary
      </router-link>
      <router-link exact :to="{name: 'listmasterMembers'}" active-class="is-active" class="mdl-layout__tab">
        Members
      </router-link>
      <router-link exact :to="{name: 'listmaster'}" active-class="is-active" class="mdl-layout__tab">
        Details
      </router-link>
      <router-link :to="{name: 'listmasterDatasources'}" active-class="is-active" class="mdl-layout__tab">
        Data sources
      </router-link>
      <router-link exact :to="{name: 'listmaster'}" active-class="is-active" class="mdl-layout__tab">
        Miscellaneous
      </router-link>
    </div>
  </top>
</template>

<script>
import Top from '@/components/layout/Top.vue';

export default {
  name: 'header-listmaster',
  components: {
    Top,
  },
};
</script>

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
  </top>
</template>

<script>
import Top from '@/components/layout/Top.vue';

export default {
  name: 'header-default',
  components: {
    Top,
  },
};
</script>

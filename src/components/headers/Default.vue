<template>
  <top>
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

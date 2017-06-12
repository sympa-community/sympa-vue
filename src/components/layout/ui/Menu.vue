<template>
  <div class="sympa-menu">
    <sympa-button :id="'menu-' + _uid" ripple icon="more_vert" icon-only></sympa-button>

    <!-- Menu -->
    <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" :for="'menu-' + _uid">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'sympa-menu',
};
</script>

<style scoped>
.sympa-menu {
  position: relative !important;
}
</style>

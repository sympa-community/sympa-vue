<template>
  <div class="sympa-menu">
    <sympa-button :id="'menu-' + _uid" ripple icon="more_vert" icon-only></sympa-button>

    <!-- Menu -->
    <ul class="mdl-menu mdl-js-menu mdl-js-ripple-effect" :for="'menu-' + _uid" :class="classes">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'sympa-menu',
  props: {
    top: Boolean,
    left: Boolean,
  },
  data() {
    return {
      classes: {
        'mdl-menu--bottom-right': !this.top && !this.left,
        'mdl-menu--top-right': this.top && !this.left,
        'mdl-menu--bottom-left': !this.top && this.left,
        'mdl-menu--top-left': this.top && this.left,
      },
    };
  },
};
</script>

<style scoped>
.sympa-menu {
  position: relative !important;
}
</style>

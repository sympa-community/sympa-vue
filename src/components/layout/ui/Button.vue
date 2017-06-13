<template>
  <button class="mdl-button mdl-js-button" :class="classes">
    <i class="material-icons" v-if="icon">{{ icon }}</i>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'sympa-button',
  props: {
    colored: Boolean,
    primary: Boolean,
    ripple: Boolean,
    raised: Boolean,
    icon: String,
    iconOnly: Boolean,
  },
  data() {
    return {
      classes: {
        'mdl-button--colored': this.colored,
        'mdl-button--primary': this.primary,
        'mdl-button--raised': this.raised,
        'mdl-js-ripple-effect': this.ripple,
        'mdl-button--icon': this.iconOnly,
      },
    };
  },
};
</script>

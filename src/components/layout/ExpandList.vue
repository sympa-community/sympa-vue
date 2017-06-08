<template>
  <div class="expand-list" :class="{'expanded' : expanded}">

    <!-- With details -->
    <div class="mdl-navigation__link mdl-list__item mdl-list__item--two-line" @click="toggleExpand" v-if="details">
      <span class="mdl-list__item-primary-content">
        <button class="mdl-list__item-secondary-content mdl-list__item-secondary-action expand-list-more mdl-button mdl-js-button mdl-button--icon" disabled>
          <i class="material-icons">expand_more</i>
        </button>
        <slot></slot>
      </span>
    </div>

    <!-- Without details -->
    <div class="mdl-navigation__link mdl-list__item" @click="toggleExpand" v-else>
      <span class="mdl-list__item-primary-content">
        <slot></slot>
        <div class="mdl-layout-spacer"></div>
        <button class="mdl-list__item-secondary-content mdl-list__item-secondary-action expand-list-more mdl-button mdl-js-button mdl-button--icon" disabled>
          <i class="material-icons">expand_more</i>
        </button>
      </span>
    </div>

    <!-- Content to expand -->
    <div>
      <slot name="expand"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'expand-list',
  props: {
    details: Boolean,
  },
  methods: {
    toggleExpand() {
      // compute max-height if not already computed
      if (!this.heightComputed && this.$el.style.overflow === 'hidden') {
        this.$el.style.overflow = 'visible';
        this.$el.style.maxHeight = `${this.$el.offsetHeight}px`;
        this.$el.style.overflow = 'hidden';
        this.heightComputed = true;
      }

      // change state
      this.expanded = !this.expanded;
    },
  },
  data: () => ({
    expanded: false,
    heightComputed: false,
  }),
};
</script>

<style scoped>
.expand-list > div {
  padding: 16px !important;
  position: relative;
}
.expand-list {
  transition: max-height .8s ease-in-out 0.1s;
  overflow: hidden;
  max-height: 72px;
}
.expand-list.expanded {
  overflow: visible;
  max-height: 1024px;
}
.expand-list-more {
  transition: .4s;
  position: absolute;
  right: 16px;
  top: 16px;
}
.expand-list.expanded .expand-list-more {
  transform: rotate(180deg);
}
.mdl-navigation__link, button > i {
  cursor: pointer;
}
</style>

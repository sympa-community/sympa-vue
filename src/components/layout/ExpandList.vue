<template>
  <div class="expand-list" :class="{ expanded }" :style="{ maxHeight }">

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
    <div ref="expand">
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
  computed: {
    maxHeight() {
      return this.expanded ? `${this.expandHeight + 72}px` : '72px';
    },
  },
  methods: {
    toggleExpand() {
      this.expandHeight = this.$refs.expand.offsetHeight;
      this.expanded = !this.expanded;
    },
  },
  data: () => ({
    expanded: false,
    expandHeight: -1,
  }),
};
</script>

<style scoped>
.expand-list > div {
  padding: 16px !important;
  position: relative;
}

.expand-list {
  transition: max-height .3s ease-in-out;
  overflow: hidden;
  max-height: 72px;
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

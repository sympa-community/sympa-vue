<template>
  <div class="expand-list" :class="{'expanded' : expanded}">
    <div class="mdl-navigation__link mdl-list__item">
      <span class="mdl-list__item-primary-content" @click="toggleExpand">
        <slot></slot>
        <div class="mdl-layout-spacer"></div>
        <button class="mdl-list__item-secondary-content mdl-list__item-secondary-action expand-list-more mdl-button mdl-js-button mdl-button--icon" disabled>
          <i class="material-icons">expand_more</i>
        </button>
      </span>
    </div>
    <div>
      <slot name="expand"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'expand-list',
  methods: {
    toggleExpand() {
      this.expanded = !this.expanded;
    },
  },
  data: () => ({
    expanded: false,
  }),
};
</script>

<style scoped>
.expand-list > div {
  padding: 16px !important;
}
.expand-list {
  transition: .8s;
  overflow: hidden;
  max-height: 72px;
}
.expand-list.expanded {
  overflow: visible;
  max-height: 1024px;
}
.expand-list-more {
  transition: .4s;
}
.expand-list.expanded .expand-list-more {
  transform: rotate(180deg);
}
</style>

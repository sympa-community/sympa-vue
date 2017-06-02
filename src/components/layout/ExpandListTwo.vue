<template>
  <div class="expand-list" :class="{'expanded' : expanded}">
    <div class="mdl-navigation__link mdl-list__item mdl-list__item--two-line">
      <span class="mdl-list__item-primary-content" @click="toggleExpand">
        <mdl-button class="mdl-list__item-secondary-content mdl-list__item-secondary-action expand-list-more" icon="expand_more" disabled></mdl-button>
        <slot></slot>
      </span>
    </div>
    <div>
      <slot name="expand"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'expand-list-two',
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
  position: relative;
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
  position: absolute;
  right: 16px;
  top: 16px;
}
.expand-list.expanded .expand-list-more {
  transform: rotate(180deg);
}
</style>

<template>
  <div class="members">
    <h2 class="page-title">
      <div class="page-title--right">
        All <i class="material-icons">filter_list</i>
      </div>
      Bounces &amp; pending
    </h2>
    <expand-list details>
      <div>
        <div class="expand-list-text-right txt-bold txt-error">Bouncing</div>
        <img src="//placehold.it/48x48" class="mdl-list__item-avatar" alt="avatar">
        <span>John Doe</span>
        <span class="mdl-list__item-sub-title">john.doe@example.com</span>
      </div>
      <div slot="expand">
        <div class="mdl-list__item expand-list-item">
          <span class="mdl-navigation__link mdl-list__item sidebar-item mdl-list__item-primary-content">
            Item 1
          </span>
        </div>
        <div class="mdl-list__item expand-list-item">
          <span class="mdl-navigation__link mdl-list__item sidebar-item mdl-list__item-primary-content">
            Item 2
          </span>
        </div>
      </div>
    </expand-list>
    <expand-list details>
      <div>
        <div class="expand-list-text-right txt-bold txt-success">Request</div>
        <img src="//placehold.it/48x48" class="mdl-list__item-avatar" alt="avatar">
        <span>John Doe</span>
        <span class="mdl-list__item-sub-title">john.doe@example.com</span>
      </div>
      <div slot="expand">
        <div class="mdl-list__item expand-list-item">
          <span class="mdl-navigation__link mdl-list__item sidebar-item mdl-list__item-primary-content">
            Item 1
          </span>
        </div>
        <div class="mdl-list__item expand-list-item">
          <span class="mdl-navigation__link mdl-list__item sidebar-item mdl-list__item-primary-content">
            Item 2
          </span>
        </div>
      </div>
    </expand-list>

    <h2 class="page-title">List members</h2>
    <ul class="mdl-list page-list">
      <li class="mdl-list__item mdl-list__item--two-line">
        <span class="mdl-list__item-primary-content">
          <img src="//placehold.it/48x48" class="mdl-list__item-avatar" alt="avatar">
          <span>John Doe</span>
          <span class="mdl-list__item-sub-title">john.doe@example.com</span>
        </span>
        <span class="mdl-list__item-secondary-content">
          <sympa-menu @click.native="stopPropagation">
            <sympa-menu-item>Item 1</sympa-menu-item>
            <sympa-menu-item>Item 2</sympa-menu-item>
            <sympa-menu-item>Item 3</sympa-menu-item>
          </sympa-menu>
        </span>
      </li>
      <li class="mdl-list__item mdl-list__item--two-line">
        <span class="mdl-list__item-primary-content">
          <img src="//placehold.it/48x48" class="mdl-list__item-avatar" alt="avatar">
          <span>John Doe</span>
          <span class="mdl-list__item-sub-title">john.doe@example.com</span>
        </span>
        <span class="mdl-list__item-secondary-content">
          <sympa-menu @click.native="stopPropagation">
            <sympa-menu-item>Item 1</sympa-menu-item>
            <sympa-menu-item>Item 2</sympa-menu-item>
            <sympa-menu-item>Item 3</sympa-menu-item>
          </sympa-menu>
        </span>
      </li>
      <li class="mdl-list__item mdl-list__item--two-line">
        <span class="mdl-list__item-primary-content">
          <img src="//placehold.it/48x48" class="mdl-list__item-avatar" alt="avatar">
          <span>John Doe</span>
          <span class="mdl-list__item-sub-title">john.doe@example.com</span>
        </span>
        <span class="mdl-list__item-secondary-content">
          <sympa-menu @click.native="stopPropagation">
            <sympa-menu-item>Item 1</sympa-menu-item>
            <sympa-menu-item>Item 2</sympa-menu-item>
            <sympa-menu-item>Item 3</sympa-menu-item>
          </sympa-menu>
        </span>
      </li>
      <li class="mdl-list__item mdl-list__item--two-line">
        <span class="mdl-list__item-primary-content">
          <img src="//placehold.it/48x48" class="mdl-list__item-avatar" alt="avatar">
          <span>John Doe</span>
          <span class="mdl-list__item-sub-title">john.doe@example.com</span>
        </span>
        <span class="mdl-list__item-secondary-content">
          <sympa-menu @click.native="stopPropagation">
            <sympa-menu-item>Item 1</sympa-menu-item>
            <sympa-menu-item>Item 2</sympa-menu-item>
            <sympa-menu-item>Item 3</sympa-menu-item>
          </sympa-menu>
        </span>
      </li>
      <li class="mdl-list__item mdl-list__item--two-line">
        <span class="mdl-list__item-primary-content">
          <img src="//placehold.it/48x48" class="mdl-list__item-avatar" alt="avatar">
          <span>John Doe</span>
          <span class="mdl-list__item-sub-title">john.doe@example.com</span>
        </span>
        <span class="mdl-list__item-secondary-content">
          <sympa-menu @click.native="stopPropagation">
            <sympa-menu-item>Item 1</sympa-menu-item>
            <sympa-menu-item>Item 2</sympa-menu-item>
            <sympa-menu-item>Item 3</sympa-menu-item>
          </sympa-menu>
        </span>
      </li>
      <li class="mdl-list__item mdl-list__item--two-line">
        <span class="mdl-list__item-primary-content">
          <img src="//placehold.it/48x48" class="mdl-list__item-avatar" alt="avatar">
          <span>John Doe</span>
          <span class="mdl-list__item-sub-title">john.doe@example.com</span>
        </span>
        <span class="mdl-list__item-secondary-content">
          <sympa-menu top @click.native="stopPropagation">
            <sympa-menu-item>Item 1</sympa-menu-item>
            <sympa-menu-item>Item 2</sympa-menu-item>
            <sympa-menu-item>Item 3</sympa-menu-item>
          </sympa-menu>
        </span>
      </li>
      <li class="mdl-list__item mdl-list__item--two-line">
        <span class="mdl-list__item-primary-content">
          <img src="//placehold.it/48x48" class="mdl-list__item-avatar" alt="avatar">
          <span>John Doe</span>
          <span class="mdl-list__item-sub-title">john.doe@example.com</span>
        </span>
        <span class="mdl-list__item-secondary-content">
          <sympa-menu top @click.native="stopPropagation">
            <sympa-menu-item>Item 1</sympa-menu-item>
            <sympa-menu-item>Item 2</sympa-menu-item>
            <sympa-menu-item>Item 3</sympa-menu-item>
          </sympa-menu>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import ExpandList from '@/components/layout/ExpandList.vue';

export default {
  name: 'listmaster-members',
  methods: {
    stopPropagation(e) {
      e.stopPropagation();
    },
  },
  components: {
    ExpandList,
  },
};
</script>

<style scoped>
.page-title--right {
  top: 4px;
  right: 16px;
  vertical-align: center;
  text-transform: uppercase;
  position: absolute;
}

.page-title--right > i {
  position: relative;
  top: 5px;
}

.expand-list-text-right {
  position: absolute;
  top: 25px;
  right: 60px;
  text-transform: uppercase;
}
</style>

<template>
  <div class="datasources-page" :class="classes">
    <div class="datasources-menu">
      <ul class="mdl-list page-list">
        <router-link :to="{path: '/listmaster/datasources/settings'}" tag="li" class="mdl-list__item mdl-list__item--two-line">
          <span class="mdl-list__item-primary-content">
            <i class="material-icons mdl-list__item-icon">settings</i>
            <span>Data sources settings</span>
            <span class="mdl-list__item-sub-title">General syncing parameters</span>
          </span>
        </router-link>
        <router-link :to="{path: '/listmaster/datasources/new'}" tag="li" class="mdl-list__item mdl-list__item--two-line">
          <span class="mdl-list__item-primary-content">
            <i class="material-icons mdl-list__item-icon">add</i>
            <span>Add new data source</span>
            <span class="mdl-list__item-sub-title">Import data from external source</span>
          </span>
        </router-link>
      </ul>

      <h2 class="page-title">Members</h2>
      <ul class="mdl-list page-list">
        <li class="mdl-list__item mdl-list__item--two-line">
          <span class="mdl-list__item-primary-content">
            <span>LDAP query <strong>students</strong></span>
            <span class="mdl-list__item-sub-title txt-error txt-bold">Errors in last sync</span>
          </span>
          <span class="mdl-list__item-secondary-content">
            <sympa-menu>
              <sympa-menu-item>View imported</sympa-menu-item>
              <sympa-menu-item>Edit</sympa-menu-item>
              <sympa-menu-item>Duplicate</sympa-menu-item>
              <sympa-menu-item>Delete</sympa-menu-item>
            </sympa-menu>
          </span>
        </li>
        <li class="mdl-list__item mdl-list__item--two-line">
          <span class="mdl-list__item-primary-content">
            <span>List inclusion <strong>example</strong></span>
            <span class="mdl-list__item-sub-title">32 members imported</span>
          </span>
          <span class="mdl-list__item-secondary-content">
            <sympa-menu>
              <sympa-menu-item>View imported</sympa-menu-item>
              <sympa-menu-item>Edit</sympa-menu-item>
              <sympa-menu-item>Duplicate</sympa-menu-item>
              <sympa-menu-item>Delete</sympa-menu-item>
            </sympa-menu>
          </span>
        </li>
        <li class="mdl-list__item mdl-list__item--two-line">
          <span class="mdl-list__item-primary-content">
            <span>Manual subscriptions</span>
            <span class="mdl-list__item-sub-title">5 members manually subscribed</span>
          </span>
          <span class="mdl-list__item-secondary-content">
            <sympa-menu>
              <sympa-menu-item>View imported</sympa-menu-item>
              <sympa-menu-item>Edit</sympa-menu-item>
              <sympa-menu-item>Duplicate</sympa-menu-item>
              <sympa-menu-item>Delete</sympa-menu-item>
            </sympa-menu>
          </span>
        </li>
      </ul>

      <h2 class="page-title">Owners</h2>
      <ul class="mdl-list page-list">
        <li class="mdl-list__item mdl-list__item--two-line">
          <span class="mdl-list__item-primary-content">
            <span>Manual</span>
            <span class="mdl-list__item-sub-title">2 owners specified</span>
          </span>
          <span class="mdl-list__item-secondary-content">
            <sympa-menu>
              <sympa-menu-item>View imported</sympa-menu-item>
              <sympa-menu-item>Edit</sympa-menu-item>
              <sympa-menu-item>Duplicate</sympa-menu-item>
              <sympa-menu-item>Delete</sympa-menu-item>
            </sympa-menu>
          </span>
        </li>
      </ul>

      <h2 class="page-title">Moderators</h2>
      <ul class="mdl-list page-list">
        <li class="mdl-list__item mdl-list__item--two-line">
          <span class="mdl-list__item-primary-content">
            <span>MySQL query <strong>test</strong></span>
            <span class="mdl-list__item-sub-title">12 moderators imported</span>
          </span>
          <span class="mdl-list__item-secondary-content">
            <sympa-menu>
              <sympa-menu-item>View imported</sympa-menu-item>
              <sympa-menu-item>Edit</sympa-menu-item>
              <sympa-menu-item>Duplicate</sympa-menu-item>
              <sympa-menu-item>Delete</sympa-menu-item>
            </sympa-menu>
          </span>
        </li>
      </ul>

      <h2 class="page-title">Custom attributes</h2>
      <ul class="mdl-list page-list">
        <li class="mdl-list__item mdl-list__item--two-line">
          <span class="mdl-list__item-primary-content">
            <span>MySQL query <strong>test</strong></span>
            <span class="mdl-list__item-sub-title">12 moderators imported</span>
          </span>
          <span class="mdl-list__item-secondary-content">
            <sympa-menu>
              <sympa-menu-item>View imported</sympa-menu-item>
              <sympa-menu-item>Edit</sympa-menu-item>
              <sympa-menu-item>Duplicate</sympa-menu-item>
              <sympa-menu-item>Delete</sympa-menu-item>
            </sympa-menu>
          </span>
        </li>
      </ul>
    </div>
    <div class="datasources-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListmasterDatasources',
  data() {
    return {
      content: this.$route.matched[0].path !== '/listmaster/datasources',
      getClasses: this.classes,
    };
  },
  computed: {
    classes() {
      return {
        'with-content': this.content,
        'without-content': !this.content,
      };
    },
  },
  watch: {
    $route() {
      this.content = this.$route.path !== '/listmaster/datasources';
      this.classes['with-content'] = this.content;
      this.classes['without-content'] = !this.content;
    },
  },
};
</script>

<style scoped>
.mdl-list__item {
  cursor: pointer;
}

.datasources-page {
  display: flex;
  width: 100%;
}

.without-content > .datasources-menu {
  flex: 1;
}

.without-content > .datasources-content {
  display: none;
}

.with-content > .datasources-menu {
  display: none;
}

.with-content > .datasources-content {
  flex: 1;
}

@media screen and (min-width: 768px) {
  .datasources-menu {
    border-right: 1px solid #d8d8d8;
    width: 350px;
  }

  .datasources-content {
    width: calc(100% - 350px);
  }

  .datasources-menu,
  .datasources-content {
    vertical-align: top;
    display: inline-block !important;
    overflow: auto;
    max-height: calc(100vh - 112px);
  }
}
</style>

<template>
  <div class="datasources-new">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <sympa-button ripple icon="close" icon-only @click.native="close"></sympa-button>
        <span class="mdl-layout-title header-title">New data source</span>
        <div class="mdl-layout-spacer"></div>
        <sympa-button ripple icon="arrow_forward" icon-only @click.native="next"></sympa-button>
      </div>
    </header>
    <h1>New</h1>
    <sympa-button colored raised ripple @click.native="next">Next</sympa-button>
  </div>
</template>

<script>
export default {
  methods: {
    next() {
      this.$router.push({
        name: 'listmasterDatasourcesEdit',
      });
    },
    close() {
      this.$router.push({
        name: 'listmasterDatasources',
      });
    },
  },
};
</script>

<style scoped>
header {
  display: none;
}

header > div {
  padding-left: 16px;
}
.header-title {
  padding-left: 16px;
}

.datasources-new {
  background-color: #fff;
}

@media screen and (max-width: 960px) {
  header {
    display: block;
  }
  .datasources-new {
    z-index: 4;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
  }
}
</style>

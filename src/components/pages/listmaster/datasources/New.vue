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
    <div class="content">
      <h1>Add a new data source</h1>
      <h2>Some help text about data sources</h2>
      <sympa-button colored raised ripple @click.native="next">Next</sympa-button>
    </div>
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
.content {
  padding: 16px;
}

h1, h2 {
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 34px;
}

h2 {
  font-size: 15px;
  line-height: 20px;
  margin-bottom: 20px;
}

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
  h1, h2 {
    display: none;
  }

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

  .content {
    box-sizing: border-box;
    max-height: calc(100vh - 56px);
    overflow: auto;
  }
}
</style>

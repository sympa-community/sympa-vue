<template>
  <div class="datasources-new">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <sympa-button ripple icon="close" icon-only @click.native="close"></sympa-button>
        <span class="mdl-layout-title header-title">SQL query</span>
        <div class="mdl-layout-spacer"></div>
        <sympa-button ripple icon="done" icon-only @click.native="save"></sympa-button>
      </div>
    </header>
    <h1>Edit</h1>
    <sympa-button colored raised ripple @click.native="save">Save</sympa-button>
  </div>
</template>

<script>
export default {
  methods: {
    save() {
      // do some stuff here to save datas
      this.close();
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

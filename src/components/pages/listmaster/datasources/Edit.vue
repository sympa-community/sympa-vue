<template>
  <div class="datasources-edit">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <sympa-button ripple icon="close" icon-only @click.native="close"></sympa-button>
        <span class="mdl-layout-title header-title">SQL query</span>
        <div class="mdl-layout-spacer"></div>
        <sympa-button ripple icon="done" icon-only @click.native="save"></sympa-button>
      </div>
    </header>
    <div class="content">
      <h1>Edit SQL Query <strong>test</strong></h1>
      <h2>Include list members from SQL Query</h2>

      <div class="query">
        <p class="query-title">SQL Query</p>
        <p class="query-content">SELECT user, email FROM test WHERE foo = 'bar' ORDER BY date;</p>
      </div>

      <sympa-button colored raised ripple @click.native="save">Save</sympa-button>
    </div>
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

.datasources-edit {
  background-color: #fff;
}

.query {
  background: rgba(0, 0, 0, .1);
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 16px;
  border-bottom: 2px solid rgba(0, 0, 0, .4);
}

.query-title {
  color: rgba(0, 0, 0, .5);
  font-size: 12px;
  line-height: 16px;
}

.query-content {
  color: rgba(0, 0, 0, .9);
  font-size: 16px;
  line-height: 20px;
}

@media screen and (max-width: 960px) {
  h1, h2 {
    display: none;
  }

  header {
    display: block;
  }

  .datasources-edit {
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

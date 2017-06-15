<template>
  <div class="datasources-new">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <sympa-button ripple icon="close" icon-only @click.native="close"></sympa-button>
        <span class="mdl-layout-title header-title">New data source</span>
        <div class="mdl-layout-spacer"></div>
        <sympa-button ripple icon="arrow_forward" icon-only @click.native="submit"></sympa-button>
      </div>
    </header>
    <div class="content">
      <h1>Add a new data source</h1>
      <h2>Some help text about data sources</h2>
      {{ results }}
      <form id="ds-form">
        <div class="ds-form-col">
          <h3 class="page-title">
            <i id="ds-dest" class="material-icons">help</i>
            <div class="mdl-tooltip" data-mdl-for="ds-dest">
              Some help for data source destination
            </div>
            Data source destination
          </h3>
          <sympa-radiobox name="dest" v-model="results.dest" val="members">Members</sympa-radiobox>
          <sympa-radiobox name="dest" v-model="results.dest" val="moderators">Moderators</sympa-radiobox>
          <sympa-radiobox name="dest" v-model="results.dest" val="owners">Owners</sympa-radiobox>
          <sympa-radiobox name="dest" v-model="results.dest" val="custom">Custom attributes</sympa-radiobox>
        </div>

        <div class="ds-form-col">
          <h3 class="page-title">
            <i id="ds-type" class="material-icons">help</i>
            <div class="mdl-tooltip" data-mdl-for="ds-type">
              Some help for data source type
            </div>
            Data source type
          </h3>
          <sympa-radiobox name="type" :val="type.value" :class="{'large': type.large}"
                          v-for="(type, key) in types.list" :key="key" v-model="results.type">
            {{ type.text }}
          </sympa-radiobox>
        </div>
      </form>
      <sympa-button colored raised ripple @click.native="submit" class="btn-next">
        Next
      </sympa-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      types: {
        list: [{
          value: 'custom',
          text: 'Customizable preset',
          large: true,
        }, {
          value: 'file',
          text: 'File',
        }, {
          value: 'remote-file',
          text: 'Remote file',
        }, {
          value: 'sympa-list',
          text: 'Sympa list',
        }, {
          value: 'remote-list',
          text: 'Remote list',
        }, {
          value: 'ldap',
          text: 'LDAP query',
        }, {
          value: 'ldap2',
          text: 'LDAP 2-level query',
        }, {
          value: 'sql',
          text: 'SQL query',
        }, {
          value: 'voot',
          text: 'VOOT group',
        }],
      },
      results: {
        dest: '',
        type: '',
      },
    };
  },
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
    submit() {
      const formDatas = new FormData(document.getElementById('ds-form'));
      this.results.dest = formDatas.get('dest');
      this.results.type = formDatas.get('type');
      window.sessionStorage.setItem('ds-new-results', JSON.stringify(this.results));
      this.next();
    },
  },
  created() {
    window.sessionStorage.removeItem('ds-new-results');
  },
};
</script>

<style scoped>
.btn-next,
.page-title > .material-icons {
  float: right;
}

.ds-form-col {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}

.ds-form-col > .radiobox {
  flex-basis: 50%;
  flex-shrink: 0;
}

.ds-form-col > .radiobox.large,
.ds-form-col > .page-title {
  flex-basis: 100%;
}

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

@media screen and (min-width: 1300px) {
  #ds-form {
    display: flex;
    flex-wrap: wrap;
  }

  .ds-form-col {
    flex-basis: 50%;
    flex-shrink: 0;
  }
}

@media screen and (max-width: 960px) {
  .datasources-new {
    background-color: #f6f6f6;
  }

  h1, h2 {
    display: none;
  }

  header {
    display: block;
    position: relative;
    z-index: 999;
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
    position: relative;
    box-sizing: border-box;
    max-height: calc(100vh - 56px);
    overflow: auto;
  }
}
</style>

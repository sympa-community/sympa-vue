<template>
  <div>
    <md-button class="md-raised md-accent" @click.native="logout">Logout</md-button>
    <md-table-card>
      <md-table md-sort="title" md-sort-type="desc" @select="onSelect">
        <md-table-header>
          <md-table-row>
            <md-table-head>Title</md-table-head>
            <md-table-head>Address</md-table-head>
            <md-table-head class="form-actions"></md-table-head>
          </md-table-row>
        </md-table-header>

        <md-table-body>
          <md-table-row v-for="(row, rowIndex) in mailboxes.list" :key="rowIndex" :md-item="row" md-selection>
            <md-table-cell :class="{ 'row-bold' : row.unreadMessages }">
              {{ row.name }} ({{ row.unreadMessages }} / {{ row.totalMessages }})
            </md-table-cell>
            <md-table-cell>
              ID={{ row.id }}; ROLE={{ row.role }}
            </md-table-cell>
            <md-table-cell>
              <md-button class="md-icon-button">
                <md-icon>star_border</md-icon>
              </md-button>
              <md-button class="md-icon-button">
                <md-icon>more_vert</md-icon>
              </md-button>
            </md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </md-table-card>
    <div>
      <h2>Selected Data</h2>
      <pre>{{ selectedData  }}</pre>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import JmapLogin from '@/components/layout/JmapLogin.vue';

export default {
  name: 'subscribed-list',
  data: () => ({
    selectedData: [],
  }),
  components: {
    JmapLogin,
  },
  methods: {
    onSelect(data) {
      this.selectedData = data;
      this.$forceUpdate();
    },
    logout() {
      this.$store.dispatch('jmap/logout');
    },
  },
  computed: mapGetters('jmap', ['mailboxes']),
};
</script>

<style scoped>
.form-actions {
  width: 50px;
}
.md-table-head {
  text-transform: uppercase;
}
.row-bold {
  font-weight: bold;
}
</style>

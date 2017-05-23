<template>
  <div>
    <md-list>
      <md-list-item>
        <router-link :to="{name: 'discussions'}">
          <md-icon>forum</md-icon>
          <span>Favorites</span>
        </router-link>
      </md-list-item>
    </md-list>

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
          <md-table-row v-for="(row, rowIndex) in subscriptions" :key="rowIndex" :md-item="row" md-auto-select md-selection>
            <md-table-cell v-for="(column, columnIndex) in row" :key="columnIndex" v-if="columnIndex === 'title' || columnIndex === 'address'">
              {{ column }}
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
export default {
  name: 'discussionsSubscribed',
  data: () => ({
    subscriptions: [
      {
        avatar: 'http://lorempixel.com/50/50/abstract/',
        title: 'John Doe',
        address: 'john.doe@example.com',
      },
      {
        avatar: 'http://lorempixel.com/50/50/abstract/',
        title: 'Jane Doe',
        address: 'jane.doe@example.com',
      },
    ],
    selectedData: [],
  }),
  methods: {
    onSelect(data) {
      this.selectedData = data;
      this.$forceUpdate();
    },
  },
};
</script>

<style scoped>
.form-actions {
  width: 50px;
}
.md-table-head {
  text-transform: uppercase;
}
</style>


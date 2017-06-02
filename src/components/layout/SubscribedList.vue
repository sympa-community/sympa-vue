<template>
  <div>
    <mdl-button raised colored @click.native="logout">Logout</mdl-button>

    <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp" @select="onSelect">
      <thead>
        <tr>
          <th class="mdl-data-table__cell--non-numeric">Title</th>
          <th class="mdl-data-table__cell--non-numeric">Address</th>
          <th class="form-actions"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in mailboxes.list">
          <td class="mdl-data-table__cell--non-numeric" :class="{ 'row-bold' : row.unreadMessages }">
            {{ row.name }} ({{ row.unreadMessages }} / {{ row.totalMessages }})
          </td>
          <td class="mdl-data-table__cell--non-numeric">
            ID={{ row.id }}; ROLE={{ row.role }}
          </td>
          <td>
            <mdl-button class="md-icon-button" icon="star_border"></mdl-button>
            <mdl-button class="md-icon-button" icon="more_vert"></mdl-button>
          </td>
        </tr>
      </tbody>
    </table>

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

<template>
  <div>
    <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" @click.native="logout">Logout</button>
    <table class="mdl-data-table mdl-shadow--2dp" @select="onSelect">
      <thead>
        <tr>
          <th>
            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-data-table__select" for="table-header">
              <input type="checkbox" id="table-header" class="mdl-checkbox__input" />
            </label>
          </th>
          <th class="mdl-data-table__cell--non-numeric">Title</th>
          <th class="mdl-data-table__cell--non-numeric">Address</th>
          <th class="form-actions"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in mailboxes.list">
          <td>
            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-data-table__select" :for="'row-' + rowIndex">
              <input type="checkbox" :id="'row-' + rowIndex" class="mdl-checkbox__input" />
            </label>
          </td>
          <td class="mdl-data-table__cell--non-numeric" :class="{ 'row-bold' : row.unreadMessages }">
            {{ row.name }} ({{ row.unreadMessages }} / {{ row.totalMessages }})
          </td>
          <td class="mdl-data-table__cell--non-numeric">
            ID={{ row.id }}; ROLE={{ row.role }}
          </td>
          <td>
            <sympa-button icon="star_border" icon-only></sympa-button>
            <sympa-button icon="more_vert" icon-only></sympa-button>
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
  mounted() {
    const table = document.querySelector('table');
    const headerCheckbox = table.querySelector('thead .mdl-data-table__select input');
    const boxes = table.querySelectorAll('tbody .mdl-data-table__select');
    const headerCheckHandler = (event) => {
      if (event.target.checked) {
        for (let i = 0, length = boxes.length; i < length; i += 1) {
          boxes[i].MaterialCheckbox.check();
        }
      } else {
        for (let i = 0, length = boxes.length; i < length; i += 1) {
          boxes[i].MaterialCheckbox.uncheck();
        }
      }
    };
    headerCheckbox.addEventListener('change', headerCheckHandler);
  },
};
</script>

<style scoped>
table {
  width: 100%;
}

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

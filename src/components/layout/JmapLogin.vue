<template>
  <form @submit.top.prevent="login" novalidate>
    <div class="mdl-card">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">Login</h2>
      </div>
      <div class="mdl-card__supporting-text">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="text" id="jmap_endpoint" :disabled="pending" v-model="endpoint">
          <label class="mdl-textfield__label" for="jmap_endpoint">Authentication endpoint</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="text" id="jmap_username" :disabled="pending" v-model="username">
          <label class="mdl-textfield__label" for="jmap_username">Username / Email</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="password" id="jmap_password" :disabled="pending" v-model="password">
          <label class="mdl-textfield__label" for="jmap_password">Password</label>
        </div>
        <span v-if="errored" class="md-error">{{ errorMessage }}</span>
      </div>
      <div class="mdl_card__actions">
        <button class="mdl-button mdl-js-button mdl-button--primary" type="submit" :disabled="pending">Login</button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'jmap-login',
  data: () => ({
    endpoint: 'http://localhost/authentication',
    username: 'user01@james.local',
    password: '1234',
  }),
  methods: {
    login() {
      this.$store.dispatch('jmap/login', {
        endpoint: this.endpoint,
        username: this.username,
        password: this.password,
      });
    },
  },
  computed: mapGetters('jmap', ['errored', 'errorMessage', 'pending']),
};
</script>

<style scoped>
form {
  width: 300px;
  margin: 20px auto;
}
</style>


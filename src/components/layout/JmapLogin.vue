<template>
  <form @submit.top.prevent="login" novalidate>
    <div class="mdl-card">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">Login</h2>
      </div>
      <div class="mdl-card__supporting-text">
        <mdl-textfield type="url" floating-label="Authentication endpoint" v-model="endpoint" :disabled="pending"></mdl-textfield>
        <mdl-textfield type="email" floating-label="Username / Email" v-model="username" :disabled="pending"></mdl-textfield>
        <mdl-textfield type="password" floating-label="Password" v-model="password"></mdl-textfield>
        <span v-if="errored" class="md-error">{{ errorMessage }}</span>
      </div>
      <div class="mdl_card__actions">
        <mdl-button colored type="submit" :disabled="pending">Login</mdl-button>
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


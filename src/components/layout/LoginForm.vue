<template>
  <form @submit.top.prevent="login" novalidate>
    <div class="mdl-card">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">Login</h2>
      </div>
      <div class="mdl-card__supporting-text">
        <p>Tip: try <code>username</code> / <code>password</code></p>
        <mdl-textfield floating-label="Username / Email" v-model="username" :disabled="pending" :class="{ 'is-invalid': errored }"></mdl-textfield>
        <mdl-textfield type="password" floating-label="Password" v-model="password" :disabled="pending" :class="{ 'is-invalid': errored }"></mdl-textfield>
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
  name: 'login-form',
  data: () => ({
    username: '',
    password: '',
  }),
  methods: {
    login() {
      this.$store.dispatch('auth/login', {
        username: this.username,
        password: this.password,
      });
    },
  },
  computed: mapGetters('auth', ['errored', 'errorMessage', 'pending']),
};
</script>

<style scoped>
form {
  width: 300px;
  margin: 20px auto;
}
</style>

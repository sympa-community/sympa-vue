<template>
  <form @submit.top.prevent="login" novalidate>
    <div class="mdl-card">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">Login</h2>
      </div>
      <div class="mdl-card__supporting-text">
        <p>Tip: try <code>username</code> / <code>password</code></p>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" :class="{ 'is-invalid': errored }">
          <input class="mdl-textfield__input" type="text" id="login_username" :disabled="pending" v-model="username">
          <label class="mdl-textfield__label" for="login_username">Username / Email</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" :class="{ 'is-invalid': errored }">
          <input class="mdl-textfield__input" type="password" id="login_password" :disabled="pending" v-model="password">
          <label class="mdl-textfield__label" for="login_password">Password</label>
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

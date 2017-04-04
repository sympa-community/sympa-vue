<template>
  <form @submit.stop.prevent="login">
    <md-card>
      <md-card-header>
        <div class="md-title">Login</div>
        <div class="md-subtitle">Tip: try <code>username</code> / <code>password</code></div>
      </md-card-header>

      <md-card-content>
        <md-input-container>
          <label>Username / Email</label>
          <md-input type="email" v-model="username" :disabled="pending" />
        </md-input-container>

        <md-input-container md-has-password :class="{ 'md-input-invalid': errored }">
          <label>Password</label>
          <md-input type="password" v-model="password" :disabled="pending" />

          <span v-if="errored" class="md-error">{{ errorMessage }}</span>
        </md-input-container>
      </md-card-content>

      <md-card-actions>
        <md-button type="submit" class="md-primary" :disabled="pending">Login</md-button>
      </md-card-actions>

    </md-card>
  </form>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'login-form',
  data() {
    return { username: '', password: '' };
  },
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

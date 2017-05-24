<template>
  <form @submit.top.prevent="login" novalidate>
    <md-card>
      <md-card-header>
        <div class="md-title">Login</div>
      </md-card-header>
      <md-card-content>
        <md-input-container>
          <label>Authentication endpoint</label>
          <md-input v-model="endpoint" :disabled="pending" />
        </md-input-container>
        <md-input-container>
          <label>Username / Email</label>
          <md-input type="email" v-model="username" :disabled="pending" />
        </md-input-container>
        <md-input-container md-has-password :class="{ 'md-input-invalid': errored }">
          <label>Password</label>
          <md-input type="password" v-model="password" :disabled="pending" />
        </md-input-container>
        <span v-if="errored" class="md-error">{{ errorMessage  }}</span>
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


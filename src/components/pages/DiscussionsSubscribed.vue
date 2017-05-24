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

    <jmap-login v-if="!logged" />
    <subscribed-list v-else />

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import JmapLogin from '@/components/layout/JmapLogin.vue';
import SubscribedList from '@/components/layout/SubscribedList.vue';

export default {
  name: 'discussions-subscribed',
  components: {
    JmapLogin,
    SubscribedList,
  },
  computed: mapGetters('jmap', ['logged']),
};
</script>

<style scoped>

</style>

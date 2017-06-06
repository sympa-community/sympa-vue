<template>
  <div class="discussions-subscribed">
    <router-link :to="{name: 'discussions'}" tag="button" class="mdl-button mdl-js-button mdl-button--colored">
      <i class="material-icons">forum</i>
      Favorites
    </router-link>
    <jmap-login v-if="!logged"></jmap-login>
    <subscribed-list v-else></subscribed-list>
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
.discussions-subscribed {
  padding: 16px;
}
</style>

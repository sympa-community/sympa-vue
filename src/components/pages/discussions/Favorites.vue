<template>
  <div class="discussions">
    <grid-title>Groupe de discussions</grid-title>
    <grid-list>
      <router-link :to="{ name: 'discussionsList' }">
        <grid-item></grid-item>
      </router-link>
      <grid-item></grid-item>
      <grid-item></grid-item>
      <grid-item></grid-item>
      <grid-item></grid-item>
      <grid-item></grid-item>
      <grid-item></grid-item>
      <grid-item></grid-item>
      <grid-item></grid-item>
    </grid-list>
    <grid-title>Titre du groupe</grid-title>
    <grid-list>
      <grid-item></grid-item>
      <grid-item></grid-item>
      <grid-item></grid-item>
      <grid-item></grid-item>
      <grid-item></grid-item>
      <grid-item></grid-item>
      <grid-item></grid-item>
      <grid-item></grid-item>
      <grid-item></grid-item>
    </grid-list>
  </div>
</template>

<script>
import GridList from '@/components/layout/GridList.vue';
import GridItem from '@/components/layout/GridItem.vue';
import GridTitle from '@/components/layout/GridTitle.vue';

export default {
  name: 'discussions',
  components: {
    GridList,
    GridItem,
    GridTitle,
  },
};
</script>

<style scoped>
  .discussions {
    padding: 16px;
  }
</style>

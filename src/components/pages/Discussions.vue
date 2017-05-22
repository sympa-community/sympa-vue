<template>
  <div class="discussions">
    <grid-title>Groupe de discussions</grid-title>
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

<style scoped>
.discussions {
  margin-top: -35px;
}
@media screen and (max-width: 480px) {
  .discussions {
    margin: -25px;
  }
}
</style>

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

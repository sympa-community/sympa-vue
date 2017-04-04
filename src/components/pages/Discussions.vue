<template>
  <div>
    <h1>Discussions</h1>
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

export default {
  name: 'discussions',
  components: {
    GridList,
    GridItem,
  },
};
</script>

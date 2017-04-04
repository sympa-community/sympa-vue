<template>
  <div class="grid-list">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'grid-list',
};
</script>

<style>
.grid-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>

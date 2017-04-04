<template>
  <div class="grid-list">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'grid-item',
};
</script>

<style>
.grid-list {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
}
</style>

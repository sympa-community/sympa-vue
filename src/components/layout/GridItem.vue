<template>
  <div class="grid-item">
    <slot>
      <img src="//placehold.it/500x500" alt="placeholder">
      <div class="content">
        <p class="title">Random</p>
        <p>random@example.com</p>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'grid-item',
};
</script>

<style>
.grid-item > img {
  height: 172px;
  width: 172px;
}
</style>

<template>
  <h2 class="grid-title">
    <slot></slot>
  </h2>
</template>

<script>
export default {
  name: 'grid-title',
};
</script>

<style>
.grid-title {
  font-size: 34px;
  font-weight: 400;
}
.grid-title:after {
  display: block;
  content: '';
  margin-top: 20px;
  background-color: #F1453D;
  width: 110px;
  height: 3px;
}
@media screen and (max-width: 480px) {
  .grid-title {
    display: none;
  }
}
</style>

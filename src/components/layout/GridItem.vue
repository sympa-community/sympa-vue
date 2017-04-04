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
.grid-item {
  margin-right: 25px;
  margin-bottom: 25px;
  width: 172px;
  background-color: #de1436;
  color: #fff;
}
.grid-item > img {
  height: 172px;
  width: 172px;
}
.grid-item > .content {
  padding: 16px;
  font-size: 12px;
}
.grid-item .title {
  font-weight: 500;
  font-size: 16px;
}
.grid-item p {
  margin: 0;
}
</style>

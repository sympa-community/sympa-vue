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
  width: 100%;
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
@media screen and (max-width: 960px) {
  .grid-item {
    width: 30%;
    margin: 2px;
  }
}
@media screen and (max-width: 480px) {
  .grid-item {
    width: 49%;
    margin: 1px;
  }
}
</style>

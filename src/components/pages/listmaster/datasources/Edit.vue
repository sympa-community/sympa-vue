<template>
  <div>
    <h1>Edit</h1>
    <sympa-button colored raised ripple @click.native="save">Save</sympa-button>
  </div>
</template>

<script>
export default {
  methods: {
    save() {
      this.$router.push({
        name: 'listmasterDatasources',
      });
    },
  },
};
</script>

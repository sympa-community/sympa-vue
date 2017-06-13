<template>
  <div>
    <h1>New</h1>
    <sympa-button colored raised ripple @click.native="next">Next</sympa-button>
  </div>
</template>

<script>
export default {
  methods: {
    next() {
      this.$router.push({
        name: 'listmasterDatasourcesEdit',
      });
    },
  },
};
</script>

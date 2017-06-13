<template>
  <div class="mdl-textfield mdl-js-textfield" :class="classes">
    <input :type="inputType" :pattern="pattern" class="mdl-textfield__input">
    <label for="" class="mdl-textfield__label" v-if="!!label">
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'sympa-input',
  props: {
    type: String,
    label: String,
    pattern: String,
  },
  data() {
    return {
      inputType: this.type ? this.type : 'text',
      classes: {
        'mdl-textfield--floating-label': !!this.label,
      },
    };
  },
};
</script>

<style scoped>
.mdl-textfield {
  width: 100%;
}
</style>

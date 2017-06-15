<template>
  <div class="radiobox">
    <input :id="'radiobox-' + _uid" type="radio" :name="name"
           :value="v" :disabled="disabled" :checked="c"
           v-on:change="updateValue($event.target.value)" ref="input">
    <label :for="'radiobox-' + _uid">
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: 'sympa-radiobox',
  props: {
    name: String,
    value: String,
    val: String,
    disabled: Boolean,
    checked: Boolean,
  },
  data() {
    return {
      v: this.val,
      c: this.checked,
    };
  },
  methods: {
    updateCheck() {
      this.c = this.$refs.input.checked;
    },
    updateValue(value) {
      this.c = this.$refs.input.checked;

      if (this.c) {
        this.$parent.$children.forEach((e) => {
          if (e.updateCheck !== undefined) {
            e.updateCheck();
          }
        });

        this.$emit('input', value);
        this.$forceUpdate();
      }
    },
  },
};
</script>

<style scoped>
.radiobox > input[type=radio] {
  display: none;
}

.radiobox > input[type=radio] + label {
  text-transform: uppercase;
  margin: 8px;
  font-size: 14px;
  display: block;
  background: #fff;
  color: rgba(0, 0, 0, .5);
  border-radius: 2px;
  padding: 16px;
  text-align: center;
  user-select: none;
  cursor: pointer;
}

.radiobox > input[type=radio]:checked + label {
  background: #3f51b5;
  color: #fff;
}

.radiobox > input[type=radio]:disabled + label {
 opacity: .4;
}
</style>

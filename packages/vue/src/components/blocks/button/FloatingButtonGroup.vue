<template>
  <div
    class="mat-floating-button-group"
    :style="floatingButtonGroupStyle"
  >
    <slot></slot>
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'FloatingButtonGroup',
  props: {
    bottom: t.string.def('30px'),
    right: t.string.def('30px'),
  },
  computed: {
    floatingButtonGroupStyle() {
      const { right, bottom } = this;
      return {
        right,
        bottom,
      };
    },
  },
};
</script>

<style scoped lang="scss">
  .mat-floating-button-group {
    bottom: 15px;
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 15px;
    .mat-button {
      margin-bottom: 5px;
    }
  }
</style>

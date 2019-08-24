<template>
  <div class="mat-window-item">
    <slot />
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'WindowItem',
  props: {
    selected: t.bool,
  },
};
</script>

<style scoped lang="scss">
</style>

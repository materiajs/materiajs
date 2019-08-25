<template>
  <div class="mat-swipe-item mat-scrollbar-hidden">
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
  .mat-swipe-item {
    max-height: 100vh;
    scroll-behavior: smooth;
  }
</style>

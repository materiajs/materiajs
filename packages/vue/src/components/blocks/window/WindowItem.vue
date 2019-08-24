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
    value: t.number,
  },
};
</script>

<style scoped>

</style>

<template>
  <div class="mat-padding-component"  :style="{ padding }">
    <slot />
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'PaddingComponent',
  props: {
    padding: t.string.def('15px'),
  },
};
</script>

<style scoped>

</style>

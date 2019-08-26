<template functional>
  <div
    class="mat-list"
    :class="{ bordered: props.bordered }"
    v-mat-background:[props.gradient]="[props.color, props.gradientColor]"
  >
    <slot />
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'List',
  props: {
    color: t.string.def('white'),
    bordered: t.bool.def(false),
  },
};
</script>

<style scoped lang="scss">
  @import "../../../styles/variables";
  .mat-list {
    &.bordered {
      border: 1px solid $primary-color-light;
    }
  }
</style>

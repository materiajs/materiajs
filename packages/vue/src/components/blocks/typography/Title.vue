<template>
  <div
    class="mat-title"
    :class="{ [size]: size, subtitle }"
  >
    <slot>
      {{ value }}
    </slot>
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'Title',
  props: {
    value: t.string.def(''),
    size: t.oneOf(['xs', 'small', 'regular', 'large', 'xl']),
    subtitle: t.bool.def(false),
  },
};
</script>

<style scoped lang="scss">
  @import "../../../styles/main";
  @import "../../../styles/typography";
  .mat-title {
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    align-items: center;
  }
</style>

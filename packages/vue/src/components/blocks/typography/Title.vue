<template>
  <div
    class="mat-title"
    :class="{ [size]: size, subtitle }"
    :style="getStyle"
  >
    <slot>
      {{ value }}
    </slot>
  </div>
</template>

<script>
import t from 'vue-types';
import themeable from '../../../mixins/themeable';

export default {
  name: 'Title',
  mixins: [
    themeable,
  ],
  props: {
    value: t.string.def(''),
    size: t.oneOf(['xs', 'small', 'regular', 'large', 'xl']),
    subtitle: t.bool.def(false),
  },
  computed: {
    getStyle() {
      return {
        color: this.subtitle ? this.textSecondaryColor : this.textPrimaryColor,
      };
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../../../styles/main";

  .mat-title {
    font-size: 2rem;
    margin-bottom: 10px;
    font-weight: bold;
    &.xs {
      font-size: 1.2rem;
    }
    &.small {
      font-size: 1.5rem;
    }
    &.large {
      font-size: 2.5rem;
    }
  }
</style>

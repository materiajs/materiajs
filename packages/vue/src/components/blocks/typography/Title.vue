<template>
  <div
    class="mat-title"
    :class="{ [size]: size, subtitle }"
    :style="{ color: textColor }"
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
    textColor() {
      const key = `${this.isAnyDark ? 'dark-' : ''}${this.subtitle ? 'secondary-text' : 'primary-text'}`;
      return this.theme.colors[key];
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../../../styles/main";

  .mat-title {
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    &.xs {
      font-size: 1rem;
    }
    &.xs.subtitle {
      font-size: 0.9rem;
    }
    &.small {
      font-size: 1.5rem;
    }
    &.small.subtitle {
      font-size: 1.25rem;
    }
    &.large {
      font-size: 2.5rem;
    }
  }
</style>

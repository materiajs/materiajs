<template>
  <span
    @click="action"
    class="mat-fa-wrapper mat-standard-transition"
    :style="getStyle"
  >
    <i class="mat-fa" :class="getClass"></i>
    <slot />
  </span>
</template>

<script>
import t from 'vue-types';
import themeable from '../../../mixins/themeable';

export default {
  name: 'Fa',
  mixins: [
    themeable,
  ],
  props: {
    action: t.func,
    cursor: t.string.def('pointer'),
    icon: t.string,
    size: t.oneOf(['small', 'large', 'extra-large']),
    rotate: t.number.def(0),
    prefix: t.string.def('fas'),
  },
  computed: {
    getClass() {
      return [this.prefix, `fa-${this.icon}`, this.size];
    },
    getStyle() {
      return {
        transform: this.rotate ? `rotate(${this.rotate}deg)` : undefined,
        cursor: this.cursor,
      };
    },
  },
};
</script>

<style scoped lang="scss">
  .mat-fa {
    font-size: 14px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    &-wrapper {
      position: relative;
    }
    &.small {
      font-size: 8px;
    }
    &.large {
      font-size: 18px;
    }
    &.extra-large {
      font-size: 28px;
    }
  }
</style>

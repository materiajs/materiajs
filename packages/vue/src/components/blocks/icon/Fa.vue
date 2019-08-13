<template>
  <span
    @click="action"
    class="mat-fa-wrapper mat-standard-transition"
    :class="[`space-${space}`]"
    :style="getStyle"
  >
    <i class="mat-fa" :class="getClass"></i>
    <slot />
  </span>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'Fa',
  props: {
    action: t.func,
    cursor: t.string.def('pointer'),
    icon: t.string,
    size: t.oneOf(['small', 'large', 'extra-large']),
    rotate: t.number.def(0),
    prefix: t.string.def('fas'),
    space: t.string.def(''),
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
    &-wrapper {
      position: relative;
      &.space {
        &-right {
          margin-right: 10px;
        }
        &-left {
          margin-left: 10px;
        }
      }
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

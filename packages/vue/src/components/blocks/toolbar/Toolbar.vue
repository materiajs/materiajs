<template>
  <div
    class="mat-toolbar"
    :class="[shadow ? 'mat-box-shadow-heavy' : '', size]"
    :style="_getStyle">
    <slot />
  </div>
</template>

<script>
import t from 'vue-types';
import { position, themeable } from '../../../mixins';

export default {
  name: 'toolbar',
  mixins: [
    themeable,
    position,
  ],
  props: {
    shadow: t.bool.def(true),
    size: t.oneOf(['xs', 'small', 'large']),
    noPadding: t.bool.def(false),
  },
  computed: {
    _getStyle() {
      return {
        background: this.background,
        color: this.backgroundTextColor,
        ...this.getPositionStyle,
        padding: this.noPadding ? '' : '0 15px',
      };
    },
  },
};
</script>

<style scoped lang="scss">
  .mat-toolbar {
    position: relative;
    display: flex;
    height: 60px;
    align-items: center;

    &.xs {
      height: 40px;
      font-size: 15px;
    }
    &.small {
      height: 45px;
    }
    &.large {
      height: 75px;
    }
    &.mat-box-shadow-heavy {
      z-index: 10;
    }
    >* {
      height: 100%;
    }
  }
</style>

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
    shadow: t.bool.def(false),
    size: t.oneOf(['xs', 'small', 'large']),
    noPadding: t.bool.def(false),
  },
  computed: {
    _getStyle() {
      return {
        ...this.getPositionStyle,
        padding: this.noPadding ? '' : '0 15px',
      };
    },
  },
};
</script>

<style scoped lang="scss">
  .mat-toolbar {
    align-items: center;
    background: var(--primary);
    color: var(--primary-text-color);
    display: flex;
    height: 60px;
    position: relative;

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
      z-index: 3;
    }
    /*>* {*/
    /*  height: 100%;*/
    /*}*/
  }
</style>

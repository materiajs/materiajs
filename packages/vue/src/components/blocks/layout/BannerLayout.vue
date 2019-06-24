<template>
  <div class="mat-banner-layout">
    <div
      :class="[type]"
      class="mat-banner-layout-banner" :style="_getStyle"></div>
    <div class="mat-banner-layout-slot">
      <slot />
    </div>
  </div>
</template>

<script>
import t from 'vue-types';
import themeable, { defaultAccentColor } from '../../../mixins/themeable';

export default {
  name: 'BannerLayout',
  mixins: [
    themeable,
  ],
  props: {
    color: defaultAccentColor,
    type: t.oneOf(['half', 'full']).def('half'),
  },
  computed: {
    _getStyle() {
      return {
        background: this.background,
      };
    },
  },
};
</script>

<style scoped lang="scss">
  .mat-banner-layout {
    position: relative;
    &-banner {
      position: absolute;
      height: 50%;
      width: 100%;
      z-index: 1;
      top: 0;
      left: 0;
      &.full {
        height: 100%;
      }
    }
    &-slot {
      position: relative;
      z-index: 5;
    }
  }
</style>

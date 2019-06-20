<template>
  <div class="banner-layout">
    <div class="banner-layout-banner" :style="_getStyle"></div>
    <div class="banner-layout-slot">
      <slot />
    </div>
  </div>
</template>

<script>
import themeable, { defaultAccentColor } from '../../../mixins/themeable';

export default {
  name: 'BannerLayout',
  mixins: [
    themeable,
  ],
  props: {
    color: defaultAccentColor,
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
  .banner-layout {
    position: relative;
    &-banner {
      position: absolute;
      height: 50%;
      width: 100%;
      z-index: 1;
      top: 0;
      left: 0;
    }
    &-slot {
      position: relative;
      z-index: 5;
    }
  }
</style>

<template>
  <div :class="{ 'mat-card': !hideOnMqSet }" :style="_getStyle">
    <slot />
  </div>
</template>

<script>
import t from 'vue-types';
import { defaultAccentColor } from '../../../mixins/themeable';

export default {
  name: 'Card',
  props: {
    darkColor: defaultAccentColor,
    hideOnMq: t.string,
    overflow: t.string.def('initial'),
    padding: t.string.def('15px'),
  },
  computed: {
    mqHideList() {
      const mqs = Object.keys(this.$mqAvailableBreakpoints);
      const i = mqs.findIndex(mq => mq === this.hideOnMq);
      if (i > -1) {
        return mqs.slice(0, i + 1);
      }
      return [];
    },
    hideOnMqSet() {
      return this.mqHideList.includes(this.$mq);
    },
    _getStyle() {
      return {
        background: this.background,
        padding: this.padding,
        overflow: this.overflow,
      };
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../../../styles/main";
  // Card
  .mat-card {
    background: white;
    box-shadow: $box-shadow-standard;
    padding: 15px;

    &-light {
      background: white;
      box-shadow: $box-shadow-light;
    }
  }
</style>

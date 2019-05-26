<template>
  <div :class="{ 'mat-card': !hideOnMqSet }" :style="_getStyle">
    <slot />
  </div>
</template>

<script>
import t from 'vue-types';
import themeable, { defaultAccentColor } from '../../../mixins/themeable';

export default {
  name: 'Card',
  mixins: [
    themeable,
  ],
  props: {
    darkColor: defaultAccentColor,
    hideOnMq: t.string,
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
      };
    },
  },
};
</script>

<style scoped lang="scss">
  // Card
  .mat-card {
    background: white;
    border-radius: $border-radius-standard;
    box-shadow: $box-shadow-standard;
    padding: 15px;

    &-light {
      background: white;
      border-radius: $border-radius-light;
      box-shadow: $box-shadow-light;
    }
  }
</style>

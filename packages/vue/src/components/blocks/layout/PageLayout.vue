<template>
  <div
    class="mat-page-layout"
    :style="_getElementStyle">
    <slot />
  </div>
</template>

<script>
import { defaultAccentColor } from '../../../mixins/themeable';

export default {
  name: 'PageLayout',
  props: {
    darkColor: defaultAccentColor,
  },
  data: () => ({
    mounted: false,
  }),
  mounted() {
    this.mounted = true;
  },
  computed: {
    _getElementStyle() {
      let height;
      if (this.mounted) {
        height = window.innerHeight - this.$el.getBoundingClientRect().top;
      }
      return {
        ...this.getElementStyle,
        'min-height': height ? `${height}px` : undefined,
      };
    },
  },
};
</script>

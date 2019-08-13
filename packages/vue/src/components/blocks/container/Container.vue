<template>
  <div class="mat-container" :style="_getStyle">
    <slot />
  </div>
</template>

<script>
import stylable from '../../../mixins/stylable';

export default {
  name: 'Container',
  mixins: [
    stylable,
  ],
  computed: {
    _getStyle() {
      return {
        ...this.getStyle,
        ...this.styleOptions,
      };
    },
  },
};
</script>

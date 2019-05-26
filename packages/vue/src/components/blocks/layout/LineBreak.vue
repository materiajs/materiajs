<template>
  <div
    class="mat-line-break"
    :style="getStyle"
  ></div>
</template>

<script>
import { defaultPrimaryColor } from '../../../mixins/themeable';
import { themeable } from '../../../mixins';

export default {
  name: 'LineBreak',
  props: {
    color: defaultPrimaryColor,
  },
  mixins: [
    themeable,
  ],
  computed: {
    getStyle() {
      return {
        background: this.background,
      };
    },
  },
};
</script>

<style scoped lang="scss">
  .mat-line-break {
    width: 100%;
    height: 1px;
  }
</style>

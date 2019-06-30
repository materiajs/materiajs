<template>
  <div
    :class="[flexDirection, wrapper ? 'mat-flex-layout-wrapper' : 'mat-flex-layout']"
   :style="getStyle">
    <slot />
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'FlexLayout',
  props: {
    alignItems: t.string.def('center'),
    flexDirection: t.oneOf(['row', 'column']).def('row'),
    flexWrap: t.oneOf(['wrap', 'initial', 'nowrap', 'wrap-reverse']).def('nowrap'),
    wrapper: t.bool.def(false),
  },
  computed: {
    getStyle() {
      return {
        'align-items': this.alignItems,
        'flex-direction': this.flexDirection,
        'flex-wrap': this.flexWrap,
      };
    },
  },
};
</script>

<style scoped lang="scss">
  .mat-flex-layout-wrapper {
    display: flex;
    /deep/ >* {
      display: flex;
      flex: 1;
      justify-content: space-evenly;
      >* {
        flex: 1;
      }
    }
    &.row /deep/ >* {
      flex-direction: row;
    }
    &.column /deep/ >* {
      flex-direction: column;
    }
  }
  .mat-flex-layout {
    display: flex;
    justify-content: space-evenly;
  }
</style>

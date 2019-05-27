<template>
  <div class="mat-action-box-wrapper">
    <div
      v-if="value"
      :class="[position, size]"
      class="mat-action-box">
      <div
        :style="getStyle"
        v-on-clickaway="onClickOutside"
        class="mat-action-box-body mat-card-light mat-box-shadow-heavy">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import t from 'vue-types';
import themeable from '../../../mixins/themeable';
import sizeable from '../../../mixins/sizeable';

export default {
  name: 'mat-action-box',
  mixins: [
    clickaway,
    themeable,
    sizeable,
  ],
  props: {
    position: t.oneOf(['bottom-left', 'bottom-right']).def('bottom-left'),
    value: t.bool.def(false),
  },
  computed: {
    getStyle() {
      return {
        background: this.background,
      };
    },
  },
  methods: {
    onClickOutside() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../../../styles/main";
  .mat-action-box {
    min-width: 320px;
    position: absolute;
    top: 100%;
    z-index: 100;
    &-body {
      border-radius: 5px;
      max-height: 50vh;
      overflow: scroll;
      -ms-overflow-style: none;  // IE 10+
      scrollbar-width: none;  // Firefox
      &::-webkit-scrollbar {
        display: none;  // Safari and Chrome
      }
    }
    /*&:before {*/
    /*  content: '';*/
    /*  display: inline-block;*/
    /*  border-left: 7px solid transparent;*/
    /*  border-right: 7px solid transparent;*/
    /*  border-bottom: 7px solid #ccc;*/
    /*  border-bottom-color: rgba(0, 0, 0, 0.1);*/
    /*  position: absolute;*/
    /*  top: 0;*/
    /*  left: 7px;*/
    /*}*/

    /*&:after {*/
    /*  content: '';*/
    /*  display: inline-block;*/
    /*  border-left: 6px solid transparent;*/
    /*  border-right: 6px solid transparent;*/
    /*  border-bottom: 6px solid #fff;*/
    /*  position: absolute;*/
    /*  top: 1px;*/
    /*  left: 8px;*/
    /*}*/

    &.bottom-right {
      right: 0;
      &:before {
        right: 7px;
        left: unset;
      }
      &:after {
        right: 8px;
        left: unset;
      }
    }
    &.large {
      min-width: 480px;
    }
  }
</style>

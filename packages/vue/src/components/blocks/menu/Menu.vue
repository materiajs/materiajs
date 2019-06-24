<template>
  <div class="mat-menu-wrapper">
    <transition name="fade">
      <div
        v-if="value"
        :class="[position, size]"
        class="mat-menu">
        <div
          :style="getStyle"
          v-on-clickaway="onClickOutside"
          class="mat-menu-body mat-card-light mat-box-shadow-heavy">
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import t from 'vue-types';
import themeable from '../../../mixins/themeable';
import sizeable from '../../../mixins/sizeable';

export default {
  name: 'mat-menu',
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
        color: this.backgroundTextColor,
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
  .mat-menu-wrapper {
    position: relative;
  }
  .mat-menu {
    min-width: 200px;
    position: absolute;
    top: 100%;
    z-index: 100;
    &-body {
      border-radius: 5px;
      margin-top: 5px;
      -ms-overflow-style: none;  // IE 10+
      scrollbar-width: none;  // Firefox
      &::-webkit-scrollbar {
        display: none;  // Safari and Chrome
      }
    }

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
    /deep/ .mat-toolbar, /deep/ .mat-banner-layout-banner {
      &:first-child {
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
      }
    }
  }
</style>

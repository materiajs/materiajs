<template>
  <div
    class="mat-menu-wrapper"
    :style="{ top: `${top}px`, left: `${left}px`}"
  >
    <transition name="fade">
      <div
        v-if="isMobile && value"
        class="overlay"></div>
    </transition>
    <mat-transition
      :transition-name="getTransitionName">
      <div
        v-if="value"
        :class="[position, size]"
        class="mat-menu"
        ref="menu-main"
      >
        <div
          :style="getStyle"
          v-on-clickaway="onClickOutside"
          class="mat-menu-body mat-scrollbar-hidden
          mat-card-light mat-box-shadow-heavy">
          <slot />
        </div>
      </div>
    </mat-transition>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import t from 'vue-types';
import sizeable from '../../../mixins/sizeable';
import mediaQuery from '../../../mixins/media-query';

export default {
  name: 'mat-menu',
  data: () => ({
    top: 0,
    left: 0,
  }),
  mixins: [
    clickaway,
    sizeable,
    mediaQuery,
  ],
  props: {
    color: t.string.def('white'),
    position: t.oneOf(['bottom-left', 'bottom-right']).def('bottom-left'),
    value: t.bool.def(false),
  },
  computed: {
    bottomLeft() {
      return this.position === 'bottom-left';
    },
    getTransitionName() {
      if (this.isMobile) {
        return 'slide-up-down';
      }
      return this.bottomLeft ? 'explode-left' : 'explode';
    },
  },
  mounted() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.addEventListener('click', this.onClickParent, false);
      this.$el.parentNode.removeChild(this.$el);
      document.getElementById('app').appendChild(this.$el);
    }
  },

  methods: {
    onClickOutside() {
      this.$emit('input', false);
    },
    onClickParent(e) {
      this.top = e.pageY + 15;
      if (this.position === 'bottom-left') {
        this.left = e.pageX - this.$refs['menu-main'].clientWidth + 15;
      } else {
        this.left = e.pageX;
      }
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../../../styles/main";
  .mat-menu-wrapper {
    position: fixed;
    .overlay {
      position: fixed;
      height: 100%;
      width: 100%;
      background: rgba(0,0,0,0.3);
      top: 0;
      z-index: 15;
      left: 0;
    }
  }
  .mat-menu {
    min-width: 280px;
    position: absolute;
    top: 100%;
    z-index: 100;
    &-body {
      border-radius: 5px;
      max-height: 50vh;
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
  }
  @media screen and (max-width: 768px) {
    .mat-menu {
      width: 100%;
      position: fixed;
      top: 50%;
      left: 0;
      margin-top: 0px;
      height: 50%;
      &-body {
        height: 100%;
        border-radius: 0;
      }
    }
  }
</style>

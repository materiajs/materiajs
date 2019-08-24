<template>
  <div
    class="mat-window"
    :style="{ height: minHeight }"
    :class="{ animating }"
  >
    <div ref="slider" class="swipe">
      <div class="swipe-wrap">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import t from 'vue-types';
import Swipe from 'swipejs';

export default {
  name: 'Window',
  data: () => ({
    minHeight: undefined,
    animating: false,
    swipe: null,
  }),
  props: {
    value: t.number,
    draggable: t.bool.def(true),
  },
  mounted() {
    this.swipe = new Swipe(this.$refs.slider, {
      startSlide: 0,
      // speed: 400,
      // auto: 3000,
      draggable: this.draggable,
      continuous: true,
      disableScroll: false,
      stopPropagation: true,
      callback: (index, elem, dir) => {
        this.$emit('input', index);
      },
      transitionEnd: (index, elem) => {
      }
    });
  },
  watch: {
    value: {
      handler(value) {
        if (this.swipe) {
          this.swipe.slide(value, 400);
        }
        this.animating = true;
        if (this.$el) {
          this.minHeight = `${this.$el.offsetHeight}px`;
        }
        this.$nextTick(() => {
          const match = this.$children[this.value];
          if (match) {
            this.minHeight = `${match.$el.offsetHeight}px`;
          }
        });
        setTimeout(() => {
          this.animating = false;
          // this.minHeight = undefined;
        }, 400);
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .mat-window {
    transition: all 0.2s ease;
    overflow: hidden;
    &.animating {

    }
  }
  .swipe {
    overflow: hidden;
    visibility: hidden;
    position: relative;
  }
  .swipe-wrap {
    overflow: hidden;
    position: relative;
  }
  .swipe-wrap > div {
    float: left;
    width: 100%;
    position: relative;
    overflow: hidden;
  }
</style>

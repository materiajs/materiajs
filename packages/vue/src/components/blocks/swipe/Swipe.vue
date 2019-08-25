<template>
  <div ref="mat-swipe" class="mat-swipe">
    <div class="mat-swipe-wrap">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import t from 'vue-types';
import Swipe from 'swipejs';
import { eventBus } from '../../../libraries/eventBus';

export default {
  name: 'Swipe',
  data: () => ({
    swipe: null,
  }),
  props: {
    value: t.number,
    draggable: t.bool.def(true),
    children: t.any,
  },
  mounted() {
    this.swipe = new Swipe(this.$refs['mat-swipe'], {
      startSlide: 0,
      // speed: 400,
      // auto: 3000,
      draggable: this.draggable,
      continuous: false,
      disableScroll: false,
      stopPropagation: true,
      callback: (index, elem, dir) => {
        console.log('callback');
        this.$emit('input', index);
        this.onChange(index);
      },
      transitionEnd: (index, elem) => {
      },
    });
    eventBus.$on('sidebar-opened', this.resetSwipe);
    eventBus.$on('sidebar-closed', this.resetSwipe);
  },
  methods: {
    resetSwipe() {
      if (this.swipe) {
        this.swipe.setup();
      } else {
        console.log('swipe not set up');
      }
    },
    onChange(value) {
      if (this.swipe) {
        this.swipe.slide(value, 400);
        setTimeout(() => {
          this.resetSwipe();
        }, 200);
      }
    },
  },
  watch: {
    value: {
      handler: 'resetSwipe',
      immediate: true,
    },
    children: {
      handler: 'resetSwipe',
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .mat-swipe {
    overflow: hidden;
    position: relative;
  }
  .mat-swipe-wrap {
    overflow: hidden;
    position: relative;
    min-width: 100%;
  }
  .mat-swipe-wrap > div {
    float: left;
    width: 100%;
    position: relative;
  }
</style>

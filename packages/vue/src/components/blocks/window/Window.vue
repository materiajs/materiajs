<template>
  <div ref="slider" class="swipe">
    <div ref="swipe-wrap" class="swipe-wrap clearfix">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import t from 'vue-types';
import Swipe from 'swipejs';

export default {
  name: 'Window',
  data: () => ({
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
      continuous: false,
      disableScroll: false,
      stopPropagation: true,
      callback: (index, elem, dir) => {
        this.$emit('input', index);
        this.onChange(index);
      },
      transitionEnd: (index, elem) => {
      }
    });
  },
  methods: {
    onChange(value) {
      if (this.swipe) {
        this.swipe.slide(value, 400);
      }
    },
  },
  watch: {
    value: {
      handler: 'onChange',
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .swipe {
    overflow: hidden;
    position: relative;
  }
  .swipe-wrap {
    /*overflow: hidden;*/
    /*position: relative;*/
  }
  .swipe-wrap > div {
    float: left;
    width: 100%;
    position: relative;
  }
  .clearfix:before,
  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    overflow: hidden;
  }
  .clearfix:after { clear: both; }
  .clearfix { zoom: 1; } /* IE < 8 */
</style>

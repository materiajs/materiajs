<template>
  <div class="mat-side-bar">
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave">
      <div
        v-if="show"
        class="mat-side-bar-inner"
        :style="getElementStyle"
      >
        <slot/>
      </div>
    </transition>
  </div>
</template>

<script>
import t from 'vue-types';
import Velocity from 'velocity-animate';
import themeable from '../../../mixins/themeable';

export default {
  name: 'SideBar',
  props: {
    show: t.bool.def(true),
  },
  mixins: [
    themeable,
  ],
  methods: {
    beforeEnter(el) {
      el.style.width = '0';
    },
    enter(el, done) {
      Velocity(el, { width: '300px' }, {
        complete: done,
        duration: 300,
        easing: 'easeInOutQuart',
      });
    },
    afterEnter(el) {
      el.style.cssText = ''; // eslint-disable-line
    },
    leave(el, done) {
      const styles = { width: 0 };
      Velocity(el, styles, {
        complete: done,
        duration: 300,
        easing: 'easeInOutQuart',
      });
    },
  },
};
</script>

<style scoped lang="scss">
  .mat-side-bar {
    height: calc(100vh - 60px);
    box-shadow: 1px 2px 4px -1px rgba(0, 0, 0, 0.2),
    1px 4px 5px 0px rgba(0, 0, 0, 0.14),
    2px 1px 10px 0px rgba(0, 0, 0, 0.12);
    &-inner {
      width: 300px;
      overflow: hidden;
      /deep/ >* {
        width: 300px;
        padding: 15px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .mat-side-bar {
      position: absolute;
      top: 100%;
      width: 100%;
      height: 50vh;
      transform: translateY(-100%);
      overflow: auto;
      &-inner {
        width: 100%;
        overflow: auto;
        /deep/ >* {
          width: auto;
        }
      }
    }
  }
</style>

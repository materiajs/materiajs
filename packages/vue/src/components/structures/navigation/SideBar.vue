<template>
  <div
    class="mat-side-bar"
    :class="{ 'is-mobile': isMobile, open: value }"
    :style="sideBarStyle"
  >
    <transition
      @beforeEnter="beforeEnter"
      @afterEnter="afterEnter"
      @beforeLeave="beforeLeave"
      @enter="enter"
      @leave="leave"
    >
      <div
        v-if="value"
        class="mat-side-bar-inner"
      >
        <div class="mat-side-bar-inner-block">
          <slot/>
        </div>
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
  data: () => ({
    mobileStyles: {
      beforeEnter: {
        width: '100%',
      },
      enter: {
        translateX: [0, '-100%'],
      },
      beforeLeave: {
        translateX: [0, '-100%'],
      },
      leave: {
        translateX: ['-100%', 0],
      },
    },
    regularStyles: {
      beforeEnter: {
        width: '0',
      },
      enter: {
        translateX: [0, '-300px'],
        width: '300px',
      },
      beforeLeave: {
        width: '300px',
        translateX: [0, '-300px'],
      },
      leave: {
        width: '0px',
        translateX: ['-300px', 0],
      },
    },
  }),
  props: {
    value: t.bool.def(true),
  },
  mixins: [
    themeable,
  ],
  computed: {
    isMobile() {
      return ['xs', 'sm', 'md'].includes(this.$mq);
    },
    styles() {
      return this.isMobile ? this.regularStyles : this.regularStyles;
    },
    sideBarStyle() {
      return {
        'border-right': `1px solid ${this.theme.colors.accent}`,
        background: this.background,
        color: this.textColor,
      };
    },
  },
  methods: {
    beforeEnter(el) {
      const styles = this.styles.beforeEnter;
      Object.keys(styles)
        .forEach((attr) => {
          el.style[attr] = styles[attr]; // eslint-disable-line
        });
    },
    enter(el, done) {
      Velocity(el, this.styles.enter, {
        complete: done,
        duration: 400,
        easing: 'easeInOutQuart',
      });
    },
    afterEnter(el) {
      el.style.cssText = ''; // eslint-disable-line
    },
    beforeLeave(el) {
      const styles = this.styles.beforeLeave;
      Object.keys(styles)
        .forEach((attr) => {
          el.style[attr] = styles[attr]; // eslint-disable-line
        });
    },
    leave(el, done) {
      Velocity(el, this.styles.leave, {
        complete: done,
        duration: 400,
        easing: 'easeInOutQuart',
      });
    },
    onClickActions() {
      this.$emit('input', !this.value);
    },
  },
};
</script>

<style scoped lang="scss">
  .mat-side-bar {
    min-height: 100%;
    box-sizing: border-box;
    &-inner {
      &-block {
        width: 300px;
      }
    }
    &.is-mobile {
      /*background: white;*/
      /*bottom: 0;*/
      /*transform: translateY(100%);*/
      /*height: 50vh;*/
      /*position: fixed;*/
      /*width: 100vw;*/
      /*z-index: 5;*/
      /*.mat-side-bar-inner {*/
      /*  width: 100%;*/
      /*  overflow: auto;*/
      /*  /deep/ >* {*/
      /*    width: auto;*/
      /*  }*/
      /*}*/
    }
    .actions {
      position: absolute;
      transform: translateY(-100%);
      width: 100%;
      background: rgb(38, 50, 56);
      color: white;
    }
  }
</style>

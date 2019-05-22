<template>
  <div
    class="mat-side-bar"
    :class="{ 'is-mobile': isMobile, open: value }"
    :style="sideBarStyle"
  >
    <transition
      @beforeEnter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div
        v-if="value"
        class="mat-side-bar-inner"
        :style="getElementStyle"
      >
        <div class="mat-side-bar-inner-block">
          <slot/>
        </div>
      </div>
    </transition>
    <div
      v-if="isMobile"
      class="actions"
      @click="onClickActions">
      <mat-fa icon="bars" />
    </div>
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
        translateY: [0, '100%'],
      },
      leave: {
        translateY: ['100%', 0],
      },
    },
    regularStyles: {
      beforeEnter: {
        width: '0',
        top: 'initial',
      },
      enter: {
        width: '300px',
      },
      leave: {
        width: '0',
        top: 'initial',
      },
    },
  }),
  props: {
    value: t.bool.def(true),
  },
  mixins: [
    themeable,
  ],
  // watch: {
  //   isMobile: 'checkDrawerState',
  //   value: {
  //     handler(newValue) {
  //       if (newValue) {
  //         this.openDrawer();
  //       } else {
  //         this.closeDrawer();
  //       }
  //     },
  //   },
  // },
  computed: {
    isMobile() {
      return ['xs', 'sm', 'md'].includes(this.$mq);
    },
    styles() {
      return this.isMobile ? this.mobileStyles : this.regularStyles;
    },
    sideBarStyle() {
      return {
        'border-right': `1px solid ${this.$toolblox.theme.accent}`,
      };
    },
  },
  methods: {
    // checkDrawerState() {
    //   if (this.isMobile) {
    //     this.closeDrawer();
    //   } else {
    //     this.openDrawer();
    //   }
    // },
    // openDrawer() {
    //   this.$emit('input', true);
    //   this.beforeEnter(this.$el);
    //   this.enter(this.$el);
    // },
    // closeDrawer() {
    //   this.$emit('input', false);
    //   this.leave(this.$el);
    // },
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
        duration: 300,
        easing: 'easeInOutQuart',
      });
      console.debug('Enter', done); // TODO - Remove console output
    },
    leave(el, done) {
      const styles = this.styles.leave;
      Velocity(el, styles, {
        complete: done,
        duration: 300,
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
    box-sizing: border-box;
    &-inner {
      width: 300px;
      &-block {
        width: 300px;
      }
    }
    &.is-mobile {
      background: white;
      bottom: 0;
      transform: translateY(100%);
      height: 50vh;
      position: fixed;
      width: 100vw;
      z-index: 5;
      .mat-side-bar-inner {
        width: 100%;
        overflow: auto;
        /deep/ >* {
          width: auto;
        }
      }
      &.open {
        transform: translateY(0);
      }
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

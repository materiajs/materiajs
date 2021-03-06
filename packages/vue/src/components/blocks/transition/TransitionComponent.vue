<template>
  <transition
    :name="transitionName"
    mode="out-in"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave">
    <slot/>
  </transition>
</template>

<script>
import t from 'vue-types';
import Velocity from 'velocity-animate';

export default {
  name: 'mat-transition',
  props: {
    duration: t.number.def(300),
    easing: t.any.def([700, 50]),
    transitionName: t.string.def('fade-in-out'),
  },
  data: () => ({
    transitionTypes: {
      'fade-in-out': () => ({
        beforeEnter: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: [0, 1] },
      }),
      'up-down': () => ({
        beforeEnter: { opacity: 0 },
        enter: { opacity: 1, translateY: [0, '25px'] },
        leave: { opacity: [0, 1], translateY: ['25px', 0] },
      }),
      'move-left': () => ({
        beforeEnter: { opacity: 0 },
        enter: { opacity: 1, translateX: [0, '25px'] },
        leave: { opacity: [0, 1], translateX: ['-25px', 0] },
      }),
      'move-right': () => ({
        beforeEnter: { opacity: 0 },
        enter: { opacity: 1, translateX: [0, '-25px'] },
        leave: { opacity: [0, 1], translateX: ['25px', 0] },
      }),
      'expand-collapse': el => ({
        beforeEnter: { opacity: 0, overflow: 'hidden' },
        enter: { 'max-height': [`${el.clientHeight}px`, 0], opacity: 1 },
        beforeLeave: { 'max-height': `${el.clientHeight}px`, overflow: 'hidden' },
        leave: { opacity: [0, 1], 'max-height': 0 },
      }),
      'slide-in-out-left': () => ({
        beforeEnter: { width: '100%', top: 0 },
        enter: { translateX: [0, '-100%'] },
        beforeLeave: { position: 'absolute', top: 0, width: '100%' },
        leave: { translateX: ['-100%', 0] },
      }),
      'slide-in-out-right': () => ({
        beforeEnter: { width: '100%', top: 0 },
        enter: { translateX: [0, '100%'] },
        beforeLeave: { position: 'absolute', top: 0, width: '100%' },
        leave: { translateX: ['100%', 0] },
      }),
      'slide-up-down': () => ({
        enter: { translateY: [0, '100%'] },
        leave: { translateY: ['100%', 0] },
      }),
      explode: () => ({
        beforeEnter: { 'transform-origin': 'top left' },
        enter: { opacity: 1, scale: [1, 0.2] },
        beforeLeave: { 'transform-origin': 'top left' },
        leave: { opacity: [0, 1], scale: 0.2 },
      }),
      'explode-left': () => ({
        beforeEnter: { 'transform-origin': 'top right' },
        enter: { opacity: 1, scale: [1, 0.2] },
        beforeLeave: { 'transform-origin': 'top right' },
        leave: { opacity: [0, 1], scale: 0.2 },
      }),
    },
  }),
  methods: {
    getTransitionStyles(el) {
      if (this.transitionTypes[this.transitionName]) {
        return this.transitionTypes[this.transitionName](el);
      }
      console.warn(`Transition styles not configured for transition name: ${this.transitionName}`);
      return false;
    },
    beforeEnter(el) {
      const styles = this.getTransitionStyles(el).beforeEnter;
      if (styles) {
        Object.keys(styles)
          .forEach((attr) => {
            el.style[attr] = styles[attr]; // eslint-disable-line
          });
      }
    },
    enter(el, done) {
      const styles = this.getTransitionStyles(el).enter;
      if (styles) {
        Velocity(el, styles, {
          complete: done,
          duration: this.duration,
          easing: this.easing,
        });
      }
    },
    afterEnter(el) {
      el.style.cssText = ''; // eslint-disable-line
    },
    beforeLeave(el) {
      const styles = this.getTransitionStyles(el).beforeLeave;
      if (styles) {
        Object.keys(styles)
          .forEach((attr) => {
            el.style[attr] = styles[attr]; // eslint-disable-line
          });
      }
    },
    leave(el, done) {
      const styles = this.getTransitionStyles(el).leave;
      if (styles) {
        Velocity(el, styles, {
          complete: done,
          duration: this.duration,
          easing: this.easing,
        });
      }
    },
    afterLeave() {
      this.$emit('after-leave');
    },
  },
};
</script>

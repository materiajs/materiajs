<template>
  <div
    class="mat-window"
    :style="{ height: minHeight }"
    :class="{ animating }"
  >
    <slot></slot>
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'Window',
  data: () => ({
    minHeight: undefined,
    animating: false,
  }),
  props: {
    animateHeight: t.bool.def(true),
    value: t.number,
  },
  watch: {
    value: {
      handler() {
        if (this.animateHeight) {
          this.animating = true;
          if (this.$el) {
            this.minHeight = `${this.$el.offsetHeight}px`;
          }
          this.$nextTick(() => {
            const match = this.$children
              .find(child => child.value === this.value);
            if (match) {
              this.minHeight = `${match.$el.offsetHeight}px`;
            }
          });
          setTimeout(() => {
            this.animating = false;
            this.minHeight = undefined;
          }, 300);
        }
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .mat-window {
    position: relative;
    transition: all 0.2s ease;
    &.animating {
      overflow: hidden;
    }
  }
</style>

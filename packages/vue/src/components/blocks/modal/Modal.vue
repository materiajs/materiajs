<template>
  <div class="mat-modal" :class="{ open: value }">
    <transition name="fade">
      <div
        v-if="value"
        class="mat-modal-background"
        @click.self="$emit('input', false)"
      >
      </div>
    </transition>
    <transition
      appear
      name="rise">
      <div
        v-if="value"
        class="mat-modal-content mat-wrapper-element mat-box-shadow-heavy">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
import t from 'vue-types';
import themeable from '../../../mixins/themeable';

export default {
  name: 'mat-modal',
  mixins: [
    themeable,
  ],
  props: {
    value: t.bool.def(false),
  },
};
</script>

<style scoped lang="scss">
  .mat-modal {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 15;
    &.open {
      height: 100%;
    }

    &-background {
      position: fixed;
      top: 0;
      height: 100%;
      width: 100%;
      background: rgba(0,0,0,0.3);
      left: 0;
    }

    &-content {
      background: white;
      border-radius: 3px;
      min-width: 260px;
      position: fixed;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(0, -50%);
      transform: translate(-50%, -50%);
    }
  }

  .rise-enter-active, .rise-leave-active {
    transition: all .4s cubic-bezier(.5,.33,.37,1.11);
  }
  .rise-enter, .rise-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translate(-50%, 0);
    top: 100vh;
  }
</style>

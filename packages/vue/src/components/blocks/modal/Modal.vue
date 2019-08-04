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
        class="mat-modal-content mat-wrapper-element mat-box-shadow-heavy"
        :class="[size]"
      >
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
    size: t.string,
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
      left: 50%;
      -webkit-transform: translate(0, -50%);
      transform: translate(-50%, -50%);
      top: 50%;
      min-width: 360px;
    }
    .large {
      transform: translate(-50%, 0%);
      min-width: 360px;
      bottom: 0;
    }
  }

  .rise-enter-active, .rise-leave-active {
    transition: all .4s cubic-bezier(.5,.33,.37,1.11);
  }
  .rise-enter,
  .rise-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translate(-50%, 0) !important;
    top: 100vh !important;
  }

  @media screen and (max-width: 768px) {
    .mat-modal-content {
      min-width: 90vw;
    }

    .large {
      top: 0;
      width: 100%;
    }
  }
</style>

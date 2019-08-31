<template>
  <div
    class="mat-modal"
    :class="{ open: value }"
  >
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
        class="mat-modal-content mat-box-shadow-heavy"
        :class="[size]"
        :style="getStyle"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'mat-modal',
  props: {
    size: t.string,
    value: t.bool.def(false),
  },
};
</script>

<style scoped lang="scss">
  .mat-modal {
    position: fixed;
    height: 0;
    width: 100%;
    left: 0;
    bottom: 0;
    transition: all .5s cubic-bezier(.5,.33,.37,1.11);
    z-index: 15;
    overflow: scroll;
    -ms-overflow-style: none;  // IE 10+
    scrollbar-width: none;  // Firefox
    &::-webkit-scrollbar {
      display: none;  // Safari and Chrome
    }
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
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      min-width: 360px;
      top: 50%;
      max-height: 95vh;
      z-index: 20;
    }
  }

  .rise-enter-active, .rise-leave-active {
    transition: all .5s cubic-bezier(.5,.33,.37,1.11);
  }
  .rise-enter,
  .rise-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translate(-50%, 100vh);
  }

  @media screen and (max-width: 768px) {
    .mat-modal-content {
      min-width: 90vw;
      margin-bottom: 0;
    }

    .large {
      top: 0;
      bottom: 0;
      transform: translate(0, 0);
      left: 0;
      max-width: 100vw;
      width: 100vw;
    }
  }
</style>

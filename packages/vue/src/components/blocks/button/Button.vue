<template>
  <button
    :style="getStyle"
    @click="$emit('click')"
    :class="[`space-${space}`]"
    class="mat-button"
    v-mat-round="round"
  >
    <slot />
  </button>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'mat-button',
  props: {
    space: t.string.def(''),
  },
};
</script>

<style scoped lang="scss">
  @import "../../../styles/main";
  .mat-button {
    align-items: center;
    background: var(--primary);
    border-radius: $border-radius-light;
    border: none;
    box-shadow: $box-shadow-light;
    color: var(--primary-text-color);
    cursor: pointer;
    display: inline-flex;
    font-size: 14px;
    outline: none;
    padding: 15px;
    transform: scale(1);
    transition: all 0.15s cubic-bezier(.41,.15,.55,1.19);
    white-space: nowrap;
    z-index: 3;
    &.space {
      &-right {
        margin-right: 10px;
      }
      &-left {
        margin-left: 10px;
      }
    }
    >* {
      min-width: 15px;
    }
    &:active {
      transform: scale(0.965);
      z-index: 1;
    }
  }
</style>

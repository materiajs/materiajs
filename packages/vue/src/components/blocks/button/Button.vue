<template>
  <button
    :style="getStyle"
    @click="$emit('click')"
    :class="[`space-${space}`]"
    class="mat-button"
  >
    <slot />
  </button>
</template>

<script>
import t from 'vue-types';
import themeable from '../../../mixins/themeable';

export default {
  name: 'mat-button',
  mixins: [themeable],
  props: {
    space: t.string.def(''),
  },
};
</script>
<style scoped lang="scss">
  @import "../../../styles/main";
  .mat-button {
    background: var(--primary);
    color: var(--primary-text-color);
    align-items: center;
    border-radius: $border-radius-light;
    border: none;
    cursor: pointer;
    display: inline-flex;
    font-size: 14px;
    height: 35px;
    outline: none;
    padding: 0 10px;
    transition: $standard-transition;
    white-space: nowrap;
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

    box-shadow: $box-shadow-light;
    &:active {
      box-shadow: $box-shadow-extra-light;
    }
  }
</style>

<template functional>
  <button
    @click="listeners.click"
    class="mat-button">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'mat-button',
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

    >* {
      min-width: 15px;
    }

    box-shadow: $box-shadow-light;
    &:active {
      box-shadow: $box-shadow-extra-light;
    }
  }
</style>

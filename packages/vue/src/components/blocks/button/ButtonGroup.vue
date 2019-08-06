<template>
  <div class="mat-button-group">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ButtonGroup',
};
</script>

<style scoped lang="scss">
  .mat-button-group {
    white-space: nowrap;
    font-size: 0;
    display: inline-block;
    /deep/ .mat-button {
      background: #212121;
      box-shadow: none;
      border: none;

      &:not(:first-child) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left: none;
      }
      &:not(:last-child) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }
</style>

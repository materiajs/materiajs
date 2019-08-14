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
    display: inline-block;
    font-size: 0;
    white-space: nowrap;
    /deep/ .mat-button {
      background: #212121;
      box-shadow: none;
      border: none;

      &:not(:first-child) {
        border-top-left-radius: 0 !important;
        border-bottom-left-radius: 0 !important;
        border-left: none;
      }
      &:not(:last-child) {
        border-top-right-radius: 0 !important;
        border-bottom-right-radius: 0 !important;
      }
    }
  }
</style>

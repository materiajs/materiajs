<template>
  <table class="mat-table">
    <slot />
  </table>
</template>

<script>
export default {
  name: 'Table',
};
</script>

<style scoped lang="scss">
  .mat-table {
    box-shadow: $box-shadow-standard;
    width: 100%;
  }
</style>

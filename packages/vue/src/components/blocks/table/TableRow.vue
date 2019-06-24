<template>
  <tr class="mat-table-row">
    <slot />
  </tr>
</template>

<script>
export default {
  name: 'TableRow',
};
</script>

<style scoped lang="scss">
  .mat-table-row {
    &:not(:last-child) {
      .mat-table-cell {
        border-bottom: 1px solid #f3f3f3;
      }
    }
  }
</style>

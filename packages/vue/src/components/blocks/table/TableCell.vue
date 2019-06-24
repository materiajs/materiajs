<template>
  <td class="mat-table-cell">
    <slot />
  </td>
</template>

<script>
export default {
  name: 'TableCell',
};
</script>

<style scoped lang="scss">
  .mat-table-cell {
    padding: 15px;
  }
</style>

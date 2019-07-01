<template functional>
  <div class="mat-paragraph">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Paragraph',
};
</script>

<style scoped lang="scss">
  .mat-paragraph {
    line-height: 1.75;
  }
</style>

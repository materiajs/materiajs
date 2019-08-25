<template functional>
  <div class="mat-horizontal-scroll">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'HorizontalScroll',
};
</script>

<style scoped lang="scss">
  .mat-horizontal-scroll {
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    max-width: 100vw;
    &::-webkit-scrollbar {
      display: none;
    }
  }
</style>

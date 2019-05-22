<template functional>
  <div class="mat-scrollbar-layout">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ScrollbarLayout',
};
</script>

<style lang="scss" scoped>
  .mat-scrollbar-layout {
    height: 100%;
    width: 100%;
    overflow: scroll;
    -ms-overflow-style: none;  // IE 10+
    scrollbar-width: none;  // Firefox
    &::-webkit-scrollbar {
      display: none;  // Safari and Chrome
    }
  }
</style>

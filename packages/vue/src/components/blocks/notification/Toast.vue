<template>
  <div class="mat-toast" :style="getStyle">
    <slot />
    <mat-spacer />
    <mat-fa @click.native="$emit('close')" icon="times" />
  </div>
</template>

<script>

export default {
  name: 'Toast',
};
</script>

<style scoped lang="scss">
  $box-shadow-heavy: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
  .mat-toast {
    display: flex;
    box-shadow: $box-shadow-heavy;
    padding: 5px 15px;
    border-radius: 3px;
    width: 150px;
    z-index: 5;
  }
</style>

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
  .mat-toast {
    display: flex;
    box-shadow: $box-shadow-heavy;
    padding: 5px 15px;
    border-radius: 3px;
    width: 150px;
    z-index: 5;
  }
</style>

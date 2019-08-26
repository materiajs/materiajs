<template>
  <div
    :class="{ active }"
    class="mat-list-item"
    :style="getStyle"
  >
    <slot />
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'ListItem',
  props: {
    active: t.bool.def(false),
    color: t.string.def(''),
  },
};
</script>

<style lang="scss" scoped>
  .mat-list-item {
    cursor: pointer;
    display: flex;
    align-items: center;
    min-height: 45px;
    padding: 0 15px;
    a {
      color: inherit;
      padding: 15px;
      display: block;
      text-decoration: none;
    }
    &.active, &:hover {
      background: rgba(0,0,0,0.05);
    }
  }
</style>

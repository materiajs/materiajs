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
  },
};
</script>

<style lang="scss" scoped>
  .mat-list-item {
    cursor: pointer;
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

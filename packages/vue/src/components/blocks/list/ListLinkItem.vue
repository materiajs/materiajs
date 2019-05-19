<template>
  <div
    :class="{ active }"
    class="mat-list-link-item">
    <slot />
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'ListLinkItem',
  props: {
    active: t.bool.def(false),
  },
};
</script>

<style lang="scss" scoped>
  @import "../../../styles/variables";

  .mat-list-link-item {
    border-bottom: 1px solid $primary-color-light;
    a {
      color: inherit;
      padding: 15px;
      display: block;
      text-decoration: none;
    }
    &.active {
      border-right: 3px solid $primary-color;
    }
    &.active, &:hover {
      background: lighten($primary-color-light, 10%);
    }
  }
</style>

<template>
  <div
    :class="{ active }"
    class="mat-list-link-item"
    :style="getStyle"
  >
    <slot />
  </div>
</template>

<script>
import t from 'vue-types';
import themeable from '../../../mixins/themeable';

export default {
  name: 'ListLinkItem',
  mixins: [
    themeable,
  ],
  props: {
    active: t.bool.def(false),
  },
  computed: {
    getStyle() {
      return {
        'border-bottom': '1px solid #ccc',
        'border-right': '1px solid #ccc',
      };
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "../../../styles/variables";

  .mat-list-link-item {
    cursor: pointer;
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
      background: rgba(0,0,0,.1);
    }
  }
</style>

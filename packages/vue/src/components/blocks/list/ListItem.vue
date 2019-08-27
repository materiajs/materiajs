<template functional>
  <div
    v-on="listeners.click ? { click: listeners.click } : {}"
    :class="{ active: props.active }"
    class="mat-list-item"
    v-mat-round="props.round"
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

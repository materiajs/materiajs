<template>
  <div
    @click="$emit('click')"
    class="mat-sidebar-item"
    :style="getSidebarItemStyle"
  >
    <slot />
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'SideBarItem',
  props: {
    active: t.bool.def(false),
  },
  computed: {
    getSidebarItemStyle() {
      return {
        ...(this.active ? this.getAccentStyle : {}),
      };
    },
  },
};
</script>

<style scoped lang="scss">
  $border: 25px;
  .mat-sidebar-item {
    cursor: pointer;
    padding: 15px;
    display: block;
    border-top-right-radius: $border;
    border-bottom-right-radius: $border;
    margin-right: 15px;
  }
</style>

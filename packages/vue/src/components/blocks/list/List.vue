<template>
  <div
    class="mat-list"
    :class="{ bordered }"
    :style="getStyle"
  >
    <slot>
      <div
        v-for="(item, key) in items"
        :key="key"
        @click="item.onClick"
        class="mat-list-item" >
        <slot name="item" v-bind:item="item" />
      </div>
    </slot>
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'List',
  props: {
    color: t.string.def('white'),
    items: t.array,
    bordered: t.bool.def(false),
  },
};
</script>

<style scoped lang="scss">
  @import "../../../styles/variables";
  .mat-list {
    &.bordered {
      border: 1px solid $primary-color-light;
    }
    >* {
      cursor: pointer;
      display: flex;
      align-items: center;
      min-height: 45px;
      padding: 0 15px;
      &:not(:last-child) {
        border-bottom: 1px solid $primary-color-light;
      }
    }
  }
</style>

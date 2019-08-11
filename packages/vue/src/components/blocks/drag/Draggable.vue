<template>
  <draggable
    v-model="valueProp"
    v-bind="dragOptions"
    :handle="handle"
    class="list-group"
    @start="isDragging = true"
    @end="isDragging = false"
  >
    <slot />
  </draggable>
</template>

<script>
import draggable from 'vuedraggable';
import t from 'vue-types';

export default {
  name: 'Draggable',
  props: {
    handle: t.string.def('.mat-handle'),
    group: t.string.def('main-group'),
    value: t.array,
  },
  components: {
    draggable,
  },
  data: () => ({
    isDragging: false,
  }),
  computed: {
    valueProp: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
    dragOptions() {
      return {
        animation: 250,
        group: this.group,
        disabled: false,
        ghostClass: 'ghosty',
      };
    },
  },
};
</script>

<style scoped lang="scss">
  .list-group {
    min-height: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  /deep/ .mat-handle {
    cursor: move !important;
  }
  /deep/ .ghost {
    opacity: 1;
  }
</style>

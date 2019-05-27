<template>
  <div @click="tabClick" class="mat-tab">
    <slot />
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'TabComponent',
  props: {
    tab: t.number.isRequired,
  },
  mounted() {
    this.$parent.$emit('tabAdded');
  },
  methods: {
    tabClick() {
      this.$parent.setActiveTab(this.tab);
    },
  },
};
</script>

<style scoped lang="scss">
  .mat-tab {
    align-items: center;
    cursor: pointer;
    display: inline-flex;
    min-width: 60px;
    padding: 15px;
    text-align: center;
    white-space: nowrap;
    justify-content: center;
  }
</style>

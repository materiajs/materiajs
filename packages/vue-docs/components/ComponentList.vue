<template>
  <div class="component-list">
    <mat-title size="xs">
      Components used:
    </mat-title>
    <mat-spacer />
    <component-link
      v-for="(component, key) in componentList"
      :key="key"
      :route="component.route"
    >{{ component.text }}</component-link>
    <mat-spacer />
    <mat-line-break color="accent" />
    <mat-spacer />
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'ComponentList',
  props: {
    componentList: t.array,
  },
};
</script>

<style scoped lang="scss">
  .component-link {
    margin-right: 5px;
  }
</style>

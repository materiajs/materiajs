<template>
  <div>
    <mat-title>{{ component.title }}</mat-title>
    <mat-paragraph>
      <div v-html="component.introduction"></div>
      <mat-spacer />
    </mat-paragraph>
    <mat-spacer />
    <component-list
      v-if="component.componentList"
      :component-list="component.componentList" />
    <template v-for="section in component.sections">
      <component :is="section.component" />
      <mat-spacer />
    </template>
  </div>
</template>

<script>
export default {
  name: 'component-name',
  data: () => ({
    component: {},
  }),
  validate({ store, params }) {
    return store.state.components[params.componentName];
  },
  created() {
    this.component = this.$store.state.components[this.$route.params.componentName];
  },
};
</script>

<style scoped>

</style>

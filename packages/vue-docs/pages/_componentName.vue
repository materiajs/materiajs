<template>
  <div class="component-name">
    <mat-padding padding="30px 15px">
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
    </mat-padding>
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

<style scoped lang="scss">
  .component-name {
    margin: auto;
    max-width: 800px;
  }
</style>

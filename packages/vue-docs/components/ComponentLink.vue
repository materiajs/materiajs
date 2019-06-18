<template>
  <nuxt-link class="component-link" :to="route">
    <mat-chip size="small">
      {{ value }}
      <slot />
    </mat-chip>
  </nuxt-link>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'ComponentLink',
  props: {
    value: t.string,
    route: t.string,
  },
};
</script>

<style scoped lang="scss">
  .component-link {
    display: inline-flex;
    text-decoration: none;
    text-decoration: none;
  }
</style>

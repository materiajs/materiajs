<template>
  <div class="select-index">
    <no-ssr>
      <mat-title>Menu</mat-title>
      <mat-button @click.native="() => menu1 = !menu1">Open</mat-button>
      <mat-menu v-model="menu1">
        <mat-padding>
          Hey
        </mat-padding>
      </mat-menu>
    </no-ssr>
  </div>
</template>

<script>
import MatMenu from '@materiajs/vue/src/components/blocks/menu/Menu.vue';

export default {
  name: 'Index',
  components: {
    MatMenu,
  },
  data: () => ({
    menu1: false,
  }),
};
</script>

<style lang="scss" scoped>
  @import "~@materiajs/vue/src/styles/main";
  .select-index {}
</style>

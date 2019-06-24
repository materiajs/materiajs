<template>
  <div class="menu-button-example">
    <mat-title size="xs">
      Button example
    </mat-title>
    <mat-spacer />
    <mat-button @click.native="() => menu = true">
      Menu
    </mat-button>
    <mat-menu @close="() => menu = !menu"
              v-model="menu">
      <mat-list>
        <div>Action 1</div>
        <div>Action 2</div>
        <div>Action 3</div>
        <div>Action 4</div>
      </mat-list>
    </mat-menu>
  </div>
</template>

<script>
export default {
  name: 'MenuButtonExample',
  data: () => ({
    menu: false,
  }),
};
</script>

<style scoped>

</style>

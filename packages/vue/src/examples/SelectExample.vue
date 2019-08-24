<template>
  <div class="select-example">
    <mat-button
      color="primary-5"
      @click="open = true">
      Menu
      <mat-menu v-model="open">
        <mat-list>
          <mat-list-item v-for="item in items">
            {{ item }}
          </mat-list-item>
        </mat-list>
      </mat-menu>
    </mat-button>
  </div>
</template>
<script>
export default {
  name: 'SelectExample',
  data: () => ({
    open: false,
    items: 20,
  }),
};
</script>

<style scoped lang="scss">
  .select-example {
    padding: 15px;
  }
</style>

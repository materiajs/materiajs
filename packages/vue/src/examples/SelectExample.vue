<template>
  <div class="select-example">
    <mat-button
      color="primary-5"
      @click="open = true">
      Menu
    </mat-button>
    <mat-menu v-model="open">
      <mat-list>
        <mat-list-item v-for="item in items">
          {{ item }}
        </mat-list-item>
      </mat-list>
    </mat-menu>
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

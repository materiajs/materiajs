<template>
  <div
    class="select-example"
    @click="open = true"
  >
    <div>
      menu
    </div>
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

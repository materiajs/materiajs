<template>
  <mat-card v-mat-round="5">
    <mat-draggable v-model="items">
      <div
        v-for="item in items"
        class="item"
      >
        <mat-toolbar :color="item.color">
          <mat-fa
            space="right"
            icon="grip-vertical"
            class="mat-handle"
          ></mat-fa>
          {{ item.name }}
        </mat-toolbar>
      </div>
    </mat-draggable>
  </mat-card>
</template>
<script>
export default {
  name: 'DragExample',
  data: () => ({
    items: [
      { name: 'Andy', id: 1, color: 'primary' },
      { name: 'Aoife', id: 2, color: 'accent' },
      { name: 'Dog', id: 3, color: 'accent-5' },
      { name: 'Cat', id: 3, color: 'primary-5' },
      { name: 'Alligator', id: 3, color: 'accent-7' },
    ],
  }),
};
</script>

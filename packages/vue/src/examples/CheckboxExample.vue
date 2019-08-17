<template>
  <div class="checbox-example">
    <mat-checkbox v-model="simple">
      Checkbox
    </mat-checkbox>
    <br>
    <mat-checkbox
      v-model="star"
      type="star"
    >
      Starred
    </mat-checkbox>
  </div>
</template>
<script>
export default {
  name: 'CheckboxExample',
  data: () => ({
    simple: false,
    star: false,
  }),
};
</script>

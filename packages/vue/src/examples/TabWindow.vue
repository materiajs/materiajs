<template>
  <div class="tab-window">
    <mat-toolbar
      color="primary-2"
      position="sticky"
      top="0"
    >
      <mat-tabs
        v-model="tab"
      >
        <mat-tab :tab="0">Bookmarks</mat-tab>
        <mat-tab :tab="1">Notes</mat-tab>
      </mat-tabs>
    </mat-toolbar>
    <mat-window :value="tab">
      <mat-window-item :value="0">
        <mat-toolbar>
          Hello
        </mat-toolbar>
      </mat-window-item>
      <mat-window-item :value="1">
        <mat-toolbar color="primary-light">
          Hello
        </mat-toolbar>
      </mat-window-item>
    </mat-window>
  </div>
</template>
<script>
export default {
  name: 'TabWindow',
  data: () => ({
    tab: 0,
  }),
};
</script>

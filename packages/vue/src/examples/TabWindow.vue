<template>
  <mat-container
    color="primary"
    class="tab-window"
    v-mat-round="5"
  >
    <mat-toolbar
      color="primary-2"
      top="0"
      v-mat-round="'5px 5px 0 0'"
    >
      <mat-tabs
        v-model="tab"
        accent-color="primary-5"
      >
        <mat-tab :tab="0">Bookmarks</mat-tab>
        <mat-tab :tab="1">Notes</mat-tab>
        <mat-tab :tab="2">TEST</mat-tab>
        <mat-tab :tab="3">TESTss</mat-tab>
        <mat-tab :tab="4">AA</mat-tab>
      </mat-tabs>
    </mat-toolbar>
    <mat-window
      v-mat-round="'0 0 5px 5px'"
      v-model="tab"
      :draggable="true"
    >
      <mat-window-item>
        <div v-mat-padding="15">
          <div>Heya</div>
          <mat-spacer />
          <div>Heya</div>
          <mat-spacer />
          <div>Heya</div>
          <mat-spacer />
          <div>Heya</div>
        </div>
      </mat-window-item>
      <mat-window-item>
        <div v-mat-padding="15">
          <div>Heya</div>
          <mat-spacer />
          <div>Heya</div>
        </div>
      </mat-window-item>
      <mat-window-item>
        <div v-mat-padding="15">
          <div>Heya</div>
          <mat-spacer />
          <div>Heya</div>
          <mat-spacer />
        </div>
      </mat-window-item>
      <mat-window-item>
        <div v-mat-padding="15">
          Heya
        </div>
      </mat-window-item>
      <mat-window-item>
        <div v-mat-padding="15">
          Heya
        </div>
      </mat-window-item>
    </mat-window>
  </mat-container>
</template>
<script>
export default {
  name: 'TabWindow',
  data: () => ({
    tab: 0,
  }),
};
</script>

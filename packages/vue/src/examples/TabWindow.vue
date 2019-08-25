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
    <mat-swipe
      v-mat-round="'0 0 5px 5px'"
      v-model="tab"
      :draggable="true"
    >
      <mat-swipe-item>
        <div class="test" v-for="(undefined, i) in new Array(100)">
          {{ i }} Yeow
        </div>
      </mat-swipe-item>
      <mat-swipe-item>
        <div v-mat-padding="15">
          <div>Heya</div>
          <mat-spacer />
          <div>Heya</div>
        </div>
      </mat-swipe-item>
      <mat-swipe-item>
        <div v-mat-padding="15">
          <div>Heya</div>
          <mat-spacer />
          <div>Heya</div>
          <mat-spacer />
        </div>
      </mat-swipe-item>
      <mat-swipe-item>
        <div v-mat-padding="15">
          Heya
        </div>
      </mat-swipe-item>
      <mat-swipe-item>
        <div v-mat-padding="15">
          Heya
        </div>
      </mat-swipe-item>
    </mat-swipe>
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

<style>
  .test {
    padding: 15px;
  }
</style>

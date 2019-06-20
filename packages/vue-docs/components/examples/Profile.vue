<template>
  <mat-card
    padding="0" overflow="hidden">
    <mat-banner-layout>
      <mat-padding padding="15px 30px">
        <mat-avatar src="https://randomuser.me/api/portraits/women/33.jpg" />
      </mat-padding>
      <mat-padding padding="0 30px 0">
        <mat-title size="small">Andy Feely</mat-title>
        <mat-title :subtitle="true" size="small">UI Designer</mat-title>
      </mat-padding>
    </mat-banner-layout>
    <mat-padding>
      <mat-tabs v-model="windowValue">
        <mat-tab :tab="0">
          Biography
        </mat-tab>
        <mat-tab :tab="1">
          Gallery
        </mat-tab>
        <mat-tab :tab="2">
          Account
        </mat-tab>
      </mat-tabs>
      <mat-padding>
        <mat-window v-model="windowValue">
          <mat-window-item :value="0">
            <mat-paragraph>
              {{ $lorem }}
            </mat-paragraph>
          </mat-window-item>
          <mat-window-item :value="1">
            <mat-paragraph>
              {{ $lorem }}
            </mat-paragraph>
          </mat-window-item>
          <mat-window-item :value="2">
            <mat-paragraph>
              {{ $lorem }}
            </mat-paragraph>
          </mat-window-item>
          <mat-window-item :value="3">
            Window 3
          </mat-window-item>
        </mat-window>
      </mat-padding>
    </mat-padding>
  </mat-card>
</template>

<script>
export default {
  name: 'Profile',
  data: () => ({
    windowValue: 0,
    showCode: false,
  }),
};
</script>

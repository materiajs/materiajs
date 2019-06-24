<template>
  <mat-padding padding="0 15px">
    <mat-flex-layout>
      <mat-avatar size="xs" src="https://randomuser.me/api/portraits/women/33.jpg"/>
      <mat-flex-item>
        <mat-padding>
          <mat-title size="xs">Andy Feely</mat-title>
          <mat-title size="xs" :subtitle="true">Andy Feely</mat-title>
        </mat-padding>
      </mat-flex-item>
    </mat-flex-layout>
  </mat-padding>
</template>
<script>
export default {
  name: 'ProfileAvatarName',
};
</script>

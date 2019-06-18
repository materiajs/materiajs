<template>
  <div class="index">
    <mat-title color="primary-light" size="large">
      Materia JS
    </mat-title>
    <mat-title size="small" color="primary-light">
      Vue component framework
    </mat-title>
    <mat-spacer />
    <mat-spacer />
    <nuxt-link to="/tabs">
      <mat-button color="primary">
         Get started
      </mat-button>
    </nuxt-link>
    <mat-button>
      <mat-fa prefix="fab" icon="github"></mat-fa >Github
    </mat-button>
  </div>
</template>

<script>

export default {
  layout: 'home',
  name: 'index',
};
</script>

<style lang="scss" scoped>
  .index {
    padding: 15px;
  }
</style>

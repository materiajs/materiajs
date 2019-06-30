<template>
  <div class="index">
    <mat-banner-layout
      :background-gradient="['primary-light', 'primary']"
      type="full" color="primary-light">
      <mat-page-layout>
        <mat-padding padding="100px 30px">
          <div class="index-main">
            <mat-title
              :dark="true"
              color="primary-light" size="large">
              Materia JS
            </mat-title>
            <mat-title
              :dark="true"
              size="small" color="primary-light">
              Vue component framework
            </mat-title>
            <mat-spacer />
            <mat-spacer />
            <nuxt-link to="/install">
              <mat-button color="primary">
                Get started
              </mat-button>
            </nuxt-link>
            <mat-button>
              <mat-fa prefix="fab" icon="github"></mat-fa >Github
            </mat-button>
            <mat-spacer />
            <mat-flex-layout flex-wrap="wrap">
              <mat-flex-item v-for="undefined in 3" flex="200px">
                <mat-padding>
                  <mat-card>
                    Card
                  </mat-card>
                </mat-padding>
              </mat-flex-item>
            </mat-flex-layout>
          </div>
        </mat-padding>
      </mat-page-layout>
    </mat-banner-layout>
  </div>
</template>

<script>

export default {
  name: 'index',
  layout: 'home',
};
</script>

<style lang="scss" scoped>
  .index {
    &-main {
      max-width: 800px;
      margin: auto;
    }
  }
</style>

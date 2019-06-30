<template>
  <div class="layout-default">
    <no-ssr>
      <mat-navigation-layout
        :color="darkMode ? 'primary-light' : undefined"
      >
        <template slot="header">
          <main-toolbar @sidebarToggle="showSidebar = !showSidebar" />
        </template>
        <template slot="nav">
          <main-sidebar v-model="showSidebar" />
        </template>
        <div class="layout-home-main">
          <mat-page-layout>
            <nuxt />
          </mat-page-layout>
          <mat-banner-layout
            type="full"
            color="primary">
            <mat-padding padding="30px 15px">
              <mat-flex-layout>
                materiajs.com
              </mat-flex-layout>
            </mat-padding>
          </mat-banner-layout>
        </div>
      </mat-navigation-layout>
    </no-ssr>
  </div>
</template>
<script>
import LayoutMixin from './layout-mixin';

export default {
  mixins: [
    LayoutMixin,
  ],
  mounted() {
    this.showSidebar = false;
  },
};
</script>
<style lang="scss">
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 15px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
</style>

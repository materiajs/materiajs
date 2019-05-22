<template>
  <div class="layout-default">
    <no-ssr>
      <mat-navigation-layout>
        <mat-toolbar
          slot="header"
          :dark="true"
          position="sticky"
          top="0">
          <mat-nav-link @click.native="showSidebar = !showSidebar">
            <mat-fa icon="bars" />
          </mat-nav-link>
          <mat-nav-link>
            Materia JS
          </mat-nav-link>
        </mat-toolbar>
        <mat-side-bar
          slot="nav"
          v-model="showSidebar">
          <mat-list-link-item
            v-for="(item, key) in navLinkItems"
            :key="key"
            :active="item.active"
          >
            <nuxt-link :to="item.to">
              {{ item.name }}
            </nuxt-link>
          </mat-list-link-item>
        </mat-side-bar>
        <nuxt />
      </mat-navigation-layout>
    </no-ssr>
  </div>
</template>
<script>

export default {
  data: () => ({
    showSidebar: true,
    listItems: [
      {
        name: 'Home',
        to: '/',
      },
      {
        name: 'Install guide',
        to: '/install',
      },
      {
        name: 'Select',
        to: '/select',
      },
      {
        name: 'Input',
        to: '/input',
      },
      {
        name: 'Button',
        to: '/button',
      },
      {
        name: 'Layouts',
        to: '/layouts',
      },
      {
        name: 'List',
        to: '/list',
      },
      {
        name: 'Toolbar',
        to: '/toolbar',
      },
    ],
  }),
  computed: {
    navLinkItems() {
      return this.listItems
        .map(item => ({
          ...item,
          active: this.$route.path === item.to,
        }));
    },
  },
};
</script>
<style lang="scss">
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
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
</style>

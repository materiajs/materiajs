<template>
  <div class="layout-home">
    <no-ssr>
      <mat-navigation-layout color="primary-light">
        <mat-toolbar
          slot="header"
          :no-padding="true"
          color="primary-light"
          :shadow="false"
          position="sticky"
          top="0">
          <mat-nav-link>
            <mat-padding>
              Materia JS
            </mat-padding>
          </mat-nav-link>
          <mat-spacer />
          <mat-nav-link @click.native="toggleDark()">
            <mat-padding>
              <mat-fa :icon="darkIcon" />
            </mat-padding>
          </mat-nav-link>
        </mat-toolbar>
        <div class="layout-home-main">
          <div class="layout-home-main-inner">
            <nuxt />
          </div>
        </div>
      </mat-navigation-layout>
    </no-ssr>
  </div>
</template>
<script>

export default {
  data: () => ({
    showSidebar: true,
  }),
  computed: {
    darkMode() {
      const store = this.$store;
      if (store.state && store.state.materiajs) {
        return store.state.materiajs.darkMode;
      }
      return false;
    },
    darkIcon() {
      return this.darkMode ? 'sun' : 'moon';
    },
  },
  methods: {
    toggleDark() {
      this.$store.commit('materiajs/toggleDark');
    },
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
  .layout-home {
    &-main {
      background: linear-gradient(rgb(30, 136, 229), rgb(92, 187, 246));
      height: 100%;
      &-inner {
        padding: 30px;
        margin: auto;
        max-width: 800px;
      }
    }
  }
</style>

<template>
  <div class="layout-default">
    <mat-toolbar :dark="true">
      <mat-nav-link>
        <nuxt-link to="/">
          Toolblox docs
        </nuxt-link>
      </mat-nav-link>
    </mat-toolbar>
    <aside>
      <mat-side-bar>
        <div
          v-for="(item, key) in navLinkItems"
          :key="key"
          class="nav-link-item"
          :class="{ active: item.active }"
        >
          <nuxt-link :to="item.to">
            {{ item.name }}
          </nuxt-link>
        </div>
      </mat-side-bar>
    </aside>
    <main>
      <nuxt />
    </main>
  </div>
</template>
<script>

export default {
  data: () => ({
    listItems: [
      {
        name: 'Select',
        to: 'select',
      },
    ],
  }),
  computed: {
    navLinkItems() {
      return this.listItems
        .map(item => ({
          ...item,
          active: this.$route.name === item.to,
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
  .layout-default {
    display: grid;
    grid-template-areas: "toolbar toolbar" "aside main";
    grid-template-columns: 300px 1fr;
    grid-template-rows: minmax(0, auto) 1fr;
    height: 100vh;
  }
  .mat-toolbar {
    grid-area: toolbar;
  }
  .mat-side-bar {
    height: 100%;
  }
  .expanding-item {
    padding: 15px;
  }
  .nav-link-item {
    border-bottom: 1px solid #ccc;
    a {
      padding: 15px;
      display: block;
      text-decoration: none;
    }
  }
</style>

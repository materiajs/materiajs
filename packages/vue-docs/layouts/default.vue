<template>
  <div class="layout-default">
    <tb-toolbar :dark="true">
      <tb-nav-link>
        <nuxt-link to="/">
          Toolblox docs
        </nuxt-link>
      </tb-nav-link>
    </tb-toolbar>
    <aside>
      <tb-side-bar>
        <div v-for="(item, key) in listItems" :key="key">
          <nuxt-link :to="item.to">
            {{ item.name }}
          </nuxt-link>
          <tb-expansion-item :show="show">
            <div class="expanding-item">
              {{ item.name }}
            </div>
          </tb-expansion-item>
        </div>
      </tb-side-bar>
    </aside>
    <main>
      <nuxt />
    </main>
  </div>
</template>
<script>

export default {
  data: () => ({
    show: false,
    listItems: [
      {
        name: 'Welcome',
        to: 'select',
      },
      {
        name: 'Install',
        to: 'select',
      },
      {
        name: 'Examples',
        to: 'select',
      },
    ],
  }),
  methods: {
    onClick() {
      this.show = !this.show;
      this.$router.push({ name: 'select' });
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
  .tb-toolbar {
    grid-area: toolbar;
  }
  .tb-side-bar {
    height: 100%;
  }
  .expanding-item {
    padding: 15px;
  }
</style>

<template>
  <div class="layout-default">
    <no-ssr>
      <mat-toolbar :dark="true" position="sticky" top="0">
        <mat-nav-link>
          <mat-fa icon="bars" @click.native="showSidebar = !showSidebar" />
        </mat-nav-link>
        <mat-nav-link>
          <nuxt-link to="/">
            Materia JS
          </nuxt-link>
        </mat-nav-link>
      </mat-toolbar>
      <section id="default-body">
        <aside>
          <mat-side-bar :show="showSidebar">
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
        </aside>
        <main>
          <nuxt />
        </main>
      </section>
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
  .layout-default {
    /*display: grid;*/
    /*grid-template-areas: "toolbar toolbar" "aside main";*/
    /*grid-template-columns: 300px 1fr;*/
    /*grid-template-rows: minmax(0, auto) 1fr;*/
    /*height: 100vh;*/
  }
  .mat-toolbar {
    grid-area: toolbar;
  }
  section {
    display: flex;
  }
  aside {
    position: sticky;
    top: 60px;
    align-self: flex-start;
    height: calc(100vh - 60px);
  }
  main {
    flex: 1;
    max-width: 100vw;
  }
  .mat-side-bar {
    height: 100%;
  }
  .expanding-item {
    padding: 15px;
  }
  @media screen and (max-width: 768px) {
    aside {
      position: absolute;
    }
  }
</style>

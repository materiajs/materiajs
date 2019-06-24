<template>
  <div class="layout-default">
    <no-ssr>
      <mat-navigation-layout
        :color="darkMode ? 'primary-light' : undefined"
      >
        <mat-toolbar
          slot="header"
          :no-padding="true"
          position="sticky"
          :color="darkMode ? undefined : 'primary-light'"
          top="0">
          <mat-nav-link @click.native="showSidebar = !showSidebar">
            <mat-padding padding="0 15px">
              <mat-fa icon="bars" />
            </mat-padding>
          </mat-nav-link>
          <nuxt-link to="/">
            <mat-nav-link>
              <mat-padding>
                Materia JS
              </mat-padding>
            </mat-nav-link>
          </nuxt-link>
          <mat-spacer />
          <mat-nav-link @click.native="toggleDark()">
            <mat-padding padding="0 15px">
              <mat-fa :icon="darkIcon" />
            </mat-padding>
          </mat-nav-link>
        </mat-toolbar>
        <mat-side-bar
          slot="nav"
          v-model="showSidebar">
          <mat-list-link-item  @click.native="showLinks = !showLinks">
            <mat-padding>
              <mat-flex-layout>
                Getting started
                <mat-spacer />
                <mat-fa
                  :rotate="showLinks ? 180 : 0"
                  icon="chevron-down" />
              </mat-flex-layout>
            </mat-padding>
          </mat-list-link-item>
          <mat-expansion-item :show="showLinks">
            <mat-list-link-item>
              <mat-padding>
                <mat-flex-layout>
                  Install
                  <mat-spacer />
                </mat-flex-layout>
              </mat-padding>
            </mat-list-link-item>
          </mat-expansion-item>
          <mat-padding>
            <mat-title size="xs">
              Components
            </mat-title>
          </mat-padding>
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
        <div class="layout-default-main">
          <div class="layout-default-main-inner">
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
    showLinks: false,
    listItems: [
      // {
      //   name: 'Install guide',
      //   to: '/install',
      // },
      {
        name: 'Button',
        to: '/button',
      },
      {
        name: 'Menu',
        to: '/menu',
      },
      {
        name: 'Window',
        to: '/window',
      },
      {
        name: 'Tabs',
        to: '/tabs',
      },
      {
        name: 'Select',
        to: '/select',
      },
      // {
      //   name: 'Input',
      //   to: '/input',
      // },
      // {
      //   name: 'Button',
      //   to: '/button',
      // },
      // {
      //   name: 'Layouts',
      //   to: '/layouts',
      // },
      // {
      //   name: 'List',
      //   to: '/list',
      // },
      {
        name: 'Toolbar',
        to: '/toolbar',
      },
    ],
  }),
  mounted() {
    if (this.getMenuMqs().includes(this.$mq)) {
      this.showSidebar = false;
    }
  },
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
    navLinkItems() {
      return this.listItems
        .map(item => ({
          ...item,
          active: this.$route.path === item.to,
        }));
    },
  },
  methods: {
    toggleDark() {
      this.$store.commit('materiajs/toggleDark');
    },
    getMenuMqs() {
      const mqs = Object.keys(this.$mqAvailableBreakpoints);
      const i = mqs.findIndex(mq => mq === 'md');
      if (i > -1) {
        return mqs.slice(0, i + 1);
      }
      return [];
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
  }
  .layout-default {
    &-main {
      padding: 30px;
      margin: auto;
      max-width: 800px;
    }
  }
</style>

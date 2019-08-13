<template>
  <div
    class="mat-navigation-layout"
    :class="{ 'sidebar-overlay': sidebarOverlay }"
    :style="getStyle"
  >
    <header>
      <slot name="header" />
    </header>
    <nav>
      <slot name="nav" />
    </nav>
    <main class="mat-scrollbar-hidden">
      <slot />
    </main>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'NavigationLayout',
  props: {
    sidebarOverlay: t.bool.def(false),
  },
};
</script>

<style scoped lang="scss">
  .mat-navigation-layout {
    grid-template-areas: "header header" "nav main" "nav footer";
    grid-template-columns: minmax(0, auto) 1fr;
    grid-template-rows: min-content 1fr min-content;
    height: 100vh;
    width: 100vw;
    display: grid;
    header {
      grid-area: header;
      z-index: 10;
    }
    nav {
      grid-area: nav;
      z-index: 5;
    }
    main {
      grid-area: main;
    }
    @media screen and (max-width: 768px) {
      main {
        grid-column-start: 1;
      }
    }
    footer {
      grid-area: footer;
    }
    &.sidebar-overlay  {
      nav {
        z-index: 15;
        position: fixed;
        height: 100%;
      }
    }
  }
</style>

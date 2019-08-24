<template functional>
  <div
    class="mat-navigation-layout"
    :class="{ 'sidebar-overlay': props.sidebarOverlay }"
    v-mat-background:[props.gradient]="[props.color, props.gradientColor]"
  >
    <header>
      <slot name="header" />
    </header>
    <section>
      <nav>
        <slot name="nav" />
      </nav>
      <main class="mat-scrollbar-hidden">
        <slot />
      </main>
    </section>
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
    display: flex;
    flex-direction: column;
    header {
      grid-area: header;
      z-index: 10;
    }
    section {
      display: flex;
      height: 100%;
      nav {
        grid-area: nav;
        z-index: 5;
      }
      main {
        grid-area: main;
        flex: 1;
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

<template functional>
  <div
    class="mat-navigation-layout mat-scrollbar-hidden"
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
      <main>
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
    width: 100vw;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
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
        max-width: 100%;
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

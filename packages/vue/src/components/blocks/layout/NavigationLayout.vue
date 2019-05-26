<template>
  <div class="mat-navigation-layout" :style="{ background, color: backgroundTextColor }">
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
import themeable from '../../../mixins/themeable';

export default {
  name: 'NavigationLayout',
  mixins: [
    themeable,
  ],
};
</script>

<style scoped lang="scss">
  .mat-navigation-layout {
    grid-template-areas: "header header" "nav main" "footer footer";
    grid-template-columns: minmax(0, auto) 1fr;
    grid-template-rows: min-content 1fr min-content;
    height: 100vh;
    width: 100vw;
    display: grid;
    header {
      grid-area: header;
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
  }
</style>

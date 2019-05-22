<template>
  <div class="mat-navigation-layout">
    <header>
      <slot name="header" />
    </header>
    <nav class="mat-scrollbar-hidden">
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
export default {
  name: 'NavigationLayout',
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
    }
    main {
      grid-area: main;
    }
    footer {
      grid-area: footer;
    }
  }
</style>

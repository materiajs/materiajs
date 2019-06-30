<template>
  <mat-toolbar
    :no-padding="true"
    position="sticky"
    :color="darkMode ? undefined : 'primary-light'"
    top="0">
    <mat-nav-link @click.native="$emit('sidebarToggle')">
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
</template>

<script>
export default {
  name: 'MainToolbar',
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

<style scoped>

</style>

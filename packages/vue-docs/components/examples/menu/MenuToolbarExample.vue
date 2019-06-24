<template>
  <div class="menu-toolbar-example">
    <mat-title size="xs">
      Toolbar example
    </mat-title>
    <mat-spacer />
    <mat-toolbar
      slot="header"
      position="sticky"
      :no-padding="true"
      :color="!darkMode ? 'primary-light' : undefined"
      top="0">
      <mat-nav-link>
        <mat-padding>
          Materia JS
        </mat-padding>
      </mat-nav-link>
      <mat-spacer />
      <mat-nav-link @click="() => menu = true">
        <mat-avatar size="xs" src="https://randomuser.me/api/portraits/women/33.jpg" />
        <mat-menu
          position="bottom-right"
          @close="() => menu = !menu"
          v-model="menu">
          <mat-window v-model="tab">
            <mat-window-item :value="0">
              <profile-avatar-name />
              <mat-list>
                <div  @click="() => tab = 1">
                  Dark theme
                </div>
                <div  @click="() => tab = 1">
                  Dark theme
                </div>
                <div  @click="() => tab = 1">
                  Dark theme
                </div>
              </mat-list>
            </mat-window-item>
            <mat-window-item :value="1">
              <mat-toolbar
                color="primary-light"
                size="xs"
                :shadow="false"
                :no-padding="true">
                <mat-flex-layout>
                  <mat-padding>
                    <mat-fa  @click.native="() => tab = 0" icon="arrow-left" />
                  </mat-padding>
                </mat-flex-layout>
                Dark theme settings
              </mat-toolbar>
              <mat-padding>
                <mat-checkbox v-model="compDarkMode">
                  Dark mode
                </mat-checkbox>
              </mat-padding>
            </mat-window-item>
          </mat-window>
        </mat-menu>
      </mat-nav-link>
    </mat-toolbar>
  </div>
</template>

<script>
export default {
  name: 'MenuToolbarExample',
  data: () => ({
    compDarkMode: false,
    menu: false,
    tab: 0,
  }),
  computed: {
    darkMode() {
      return this.$store.state.materiajs && this.$store.state.materiajs.darkMode;
    },
  },
};
</script>

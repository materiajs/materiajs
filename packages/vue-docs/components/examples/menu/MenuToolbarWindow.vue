<template>
  <div class="menu-toolbar-window-example">
    <mat-title size="xs">
      Menu Toolbar Window example
    </mat-title>
    <mat-spacer />
    <mat-button @click.native="() => menu = true">
      Menu
    </mat-button>
    <mat-menu @close="() => menu = !menu"
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
            <mat-button>Test</mat-button>
          </mat-padding>
        </mat-window-item>
      </mat-window>
    </mat-menu>
  </div>
</template>

<script>
export default {
  name: 'MenuToolbarWindow',
  data: () => ({
    menu: false,
    tab: 0,
  }),
};
</script>

<style scoped>

</style>

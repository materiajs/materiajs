<template>
  <div id="app">
    <mat-navigation-layout>
      <mat-toolbar
        slot="header"
        color="primary-light"
        position="sticky"
        :no-padding="true"
        top="0">
        <mat-nav-link @click.native="showSidebar = !showSidebar">
          <mat-padding>
            <mat-fa icon="bars" />
          </mat-padding>
        </mat-nav-link>
        <mat-nav-link>
          <mat-padding>
            Materia JS
          </mat-padding>
        </mat-nav-link>
        <mat-spacer />
        <mat-nav-link @click="() => menu2 = true">
          <mat-avatar size="xs" src="https://randomuser.me/api/portraits/women/33.jpg" />
          <mat-menu
            position="bottom-right"
            @close="() => menu2 = !menu2"
            v-model="menu2">
            <mat-padding padding="15px">
              <mat-flex-layout>
                <mat-avatar size="xs" src="https://randomuser.me/api/portraits/women/33.jpg" />
                <mat-flex-item>
                  <mat-padding>
                    <mat-title size="xs">Andy Feely</mat-title>
                    <mat-title size="xs" :subtitle="true">Andy Feely</mat-title>
                  </mat-padding>
                </mat-flex-item>
              </mat-flex-layout>
              <mat-button @click.native="toggleDark()">
                <mat-fa :icon="darkIcon" /> Toggle dark mode
              </mat-button>
              <mat-select
                v-model="singleValue"
                placeholder="Select single"
                :single-value="true"
                :options="singleSelect"
                :close-on-select="true"
                :searchable="false"
              />
            </mat-padding>
            <mat-list :bordered="true">
              <div>Action 1</div>
              <div>Action 1</div>
              <div>Action 1</div>
              <div>Action 1</div>
            </mat-list>
          </mat-menu>
        </mat-nav-link>
      </mat-toolbar>
      <mat-side-bar
        v-model="showSidebar"
        slot="nav"
        :color="darkMode ? 'accent' : undefined"
      >
        <mat-list-link-item
          v-for="(item, key) in listItems"
          :key="key"
          :active="item.active"
        >
          <mat-padding>
            {{ item.name }}
          </mat-padding>
        </mat-list-link-item>
      </mat-side-bar>
      <div class="main-wrapper">
        <div class="main-container">
          <mat-select
            v-model="singleValue"
            placeholder="Select single"
            :single-value="true"
            :options="singleSelect"
            :close-on-select="true"
            :searchable="false"
          />
        </div>
      </div>
    </mat-navigation-layout>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapMutations, mapState } = createNamespacedHelpers('materiajs');

export default {
  name: 'app',
  data: () => ({
    singleValue: {},
    singleSelect: [
      { value: 'Andy' },
      { value: 'Gary' },
      { value: 'Aoife' },
      { value: 'Chrissy' },
      { value: 'Cooper' },
    ],
    menu1: false,
    menu2: false,
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
        active: true,
      },
    ],
    showSidebar: true,
    windowValue: 0,
    dark: false,
    singleCode: '<mat-select\n'
      + '  v-model="singleValue"\n'
      + '  placeholder="Select single"\n'
      + '  :single-value="true"\n'
      + '  :options="singleSelect"\n'
      + '/>',
  }),
  computed: {
    ...mapState(['darkMode']),
    darkIcon() {
      return this.darkMode ? 'sun' : 'moon';
    },
  },
  methods: {
    ...mapMutations([
      'toggleDark',
    ]),
  },
};
</script>

<style lang="scss">
  @import "~highlight.js/styles/github.css";
  .main {
    width: 100%;
    &-wrapper {
      width: 50px;
      min-width: 100%;
    }
    &-container {
      margin: auto;
      max-width: 800px;
      padding: 15px;
    }
  }
  #default-body {
    display: flex;
  }
</style>

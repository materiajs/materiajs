<template>
  <div id="app">
    <mat-navigation-layout
      :color="darkMode ? 'primary-light' : undefined"
      :sidebar-overlay="true"
    >
      <mat-toolbar
        slot="header"
        :color="darkMode ? undefined : 'primary'"
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
            <mat-list>
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
        :overlay="true"
      >
        <mat-toolbar
          :color="darkMode ? undefined : 'primary-light'"
          position="sticky"
          :no-padding="true"
          :shadow="false"
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
        </mat-toolbar>
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
        <mat-banner-layout
          :background-gradient="['primary-light', 'primary']"
          type="full" color="primary-light">
          <mat-padding padding="60px 30px">
            <div class="index-main">
              <mat-title
                :dark="true"
                color="primary-light" size="large">
                Materia JS
              </mat-title>
              <mat-title
                :dark="true"
                size="small" color="primary-light">
                Vue component framework
              </mat-title>
              <mat-spacer />
              <mat-button>
                <mat-fa prefix="fab" icon="github"></mat-fa >Github
              </mat-button>
            </div>
          </mat-padding>
        </mat-banner-layout>
        <div class="main-container">
          <mat-title size="xs">XS</mat-title>
          <mat-title size="xs" :subtitle="true">XS</mat-title>
          <mat-title size="small">Small</mat-title>
          <mat-title size="small" :subtitle="true">Small sub</mat-title>
          <mat-title size="regular">Regular</mat-title>
          <mat-title size="regular" :subtitle="true">Regular subtitle</mat-title>
          <mat-title size="large">Large</mat-title>
          <mat-table>
            <mat-table-row>
              <mat-table-cell>
                Cell 1
              </mat-table-cell>
              <mat-table-cell>
                Cell 2
              </mat-table-cell>
            </mat-table-row>
            <mat-table-row>
              <mat-table-cell>
                Cell 1
              </mat-table-cell>
              <mat-table-cell>
                Cell 2
              </mat-table-cell>
            </mat-table-row>
          </mat-table>
          <mat-spacer />
          <mat-button @click.native="() => menu = true">
            Menu
          </mat-button>
          <mat-menu @close="() => menu = !menu"
                    v-model="menu">
            <mat-window v-model="tab">
              <mat-window-item :value="0">
                <mat-banner-layout type="full">
                  <mat-padding>
                    <mat-title size="xs" :dark="true">
                      Test
                    </mat-title>
                  </mat-padding>
                </mat-banner-layout>
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
                  color="accent"
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
    compDarkMode: false,
    menu: false,
    tab: 0,
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

<template>
  <div id="app">
    <mat-navigation-layout>
      <mat-toolbar
        slot="header"
        position="sticky"
        top="0">
        <mat-nav-link @click.native="showSidebar = !showSidebar">
          <mat-fa icon="bars" />
        </mat-nav-link>
        <mat-nav-link>
          Materia JS
        </mat-nav-link>
        <mat-spacer />
        <mat-nav-link @click.native="toggleDark()">
          <mat-fa :icon="darkIcon" />
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
          <mat-title>Select</mat-title>
          <mat-title :subtitle="true" color="accent" size="xs">
            Examples
          </mat-title>
          <mat-title>
            Add coin
          </mat-title>
          <mat-spacer></mat-spacer>
          <mat-select
            placeholder="Select coin"
            :single-value="true"
            :options="[]"
            :close-on-select="true"
          />
          <mat-spacer></mat-spacer>
          <mat-input
            type="number"
          />
          <mat-spacer></mat-spacer>
          <mat-button
            color="primary"
          >
            Save
          </mat-button>
          <mat-spacer></mat-spacer>
          <mat-card hide-on-mq="md">
            <mat-padding padding="0 0 15px">
              <mat-tabs v-model="windowValue">
                <mat-tab :tab-key="0">
                  Window 1
                </mat-tab>
                <mat-tab :tab-key="1">
                  Window 2
                </mat-tab>
                <mat-tab :tab-key="2">
                  Window 3 - with a little extra
                </mat-tab>
                <mat-tab :tab-key="3">
                  Window 4
                </mat-tab>
                <mat-tab :tab-key="4">
                  Window 4
                </mat-tab>
                <mat-tab :tab-key="5">
                  Window 4
                </mat-tab>
                <mat-tab :tab-key="6">
                  Window 4
                </mat-tab>
                <mat-tab :tab-key="7">
                  Window 4
                </mat-tab>
              </mat-tabs>
            </mat-padding>
            <mat-window v-model="windowValue">
              <mat-window-item :value="0">
                Window 1
              </mat-window-item>
              <mat-window-item :value="1">
                <mat-code :value="singleCode" lang="html" />
              </mat-window-item>
              <mat-window-item :value="2">
                <mat-code :value="singleCode" lang="html" />
                <mat-code :value="singleCode" lang="html" />
                <mat-code :value="singleCode" lang="html" />
                <mat-code :value="singleCode" lang="html" />
                <mat-code :value="singleCode" lang="html" />
                <mat-code :value="singleCode" lang="html" />
                <mat-code :value="singleCode" lang="html" />
                <mat-code :value="singleCode" lang="html" />
                <mat-code :value="singleCode" lang="html" />
                <mat-code :value="singleCode" lang="html" />
                <mat-code :value="singleCode" lang="html" />
                <mat-code :value="singleCode" lang="html" />
              </mat-window-item>
              <mat-window-item :value="3">
                Window 3
              </mat-window-item>
            </mat-window>
            <mat-spacer />
            <mat-spacer />
            <mat-input
              v-model="inputValue"
              placeholder="With clear button on right"
              :show-clear-button="true" />
          </mat-card>
        </div>
      </div>
    </mat-navigation-layout>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import {
  MatCode, MatWindow, MatWindowItem, MatTab, MatTabs,
} from './components/blocks';

const { mapMutations, mapState } = createNamespacedHelpers('materiajs');

export default {
  name: 'app',
  data: () => ({
    inputValue: 'Test',
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
      },
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
      },
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
  components: {
    MatCode,
    MatWindow,
    MatWindowItem,
    MatTab,
    MatTabs,
  },
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

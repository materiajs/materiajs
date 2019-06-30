<template>
  <mat-side-bar
    slot="nav"
    :value="value"
    @input="onToggleMenu"
  >
    <mat-padding>
      <mat-title size="xs">
        Getting started
      </mat-title>
    </mat-padding>
    <mat-list-link-item
      v-for="(item, key) in gettingStartedItems"
      :key="key + '-gs'"
      :active="item.active"
    >
      <nuxt-link :to="item.to">
        {{ item.name }}
      </nuxt-link>
    </mat-list-link-item>
    <mat-padding>
      <mat-title size="xs">
        Components
      </mat-title>
    </mat-padding>
    <mat-list-link-item
      v-for="(item, key) in navLinkItems"
      :key="key"
      :active="item.active"
    >
      <nuxt-link :to="item.to">
        {{ item.name }}
      </nuxt-link>
    </mat-list-link-item>
  </mat-side-bar>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'MainSidebar',
  props: {
    value: t.bool.def(false),
  },
  data: () => ({
    gettingStarted: [
      {
        name: 'Install guide',
        to: '/install',
      },
    ],
    listItems: [
      {
        name: 'Button',
        to: '/button',
      },
      {
        name: 'Menu',
        to: '/menu',
      },
      {
        name: 'Window',
        to: '/window',
      },
      {
        name: 'Tabs',
        to: '/tabs',
      },
      {
        name: 'Select',
        to: '/select',
      },
      {
        name: 'Toolbar',
        to: '/toolbar',
      },
    ],
  }),
  computed: {
    navLinkItems() {
      return this.listItems
        .map(item => ({
          ...item,
          active: this.$route.path === item.to,
        }));
    },
    gettingStartedItems() {
      return this.gettingStarted
        .map(item => ({
          ...item,
          active: this.$route.path === item.to,
        }));
    },
  },
  methods: {
    getMenuMqs() {
      const mqs = Object.keys(this.$mqAvailableBreakpoints);
      const i = mqs.findIndex(mq => mq === 'md');
      if (i > -1) {
        return mqs.slice(0, i + 1);
      }
      return [];
    },
    onToggleMenu(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style scoped>

</style>

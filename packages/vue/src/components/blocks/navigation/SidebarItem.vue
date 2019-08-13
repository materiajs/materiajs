<template>
  <div
    @click="$emit('click')"
    class="mat-sidebar-item"
    :style="getSidebarItemStyle"
  >
    <slot />
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'SideBarItem',
  props: {
    active: t.bool.def(false),
    hoverColor: t.string.def('accent-3'),
  },
  watch: {
    accentColor: {
      handler: 'setHover',
    },
  },
  mounted() {
    this.setHover();
  },
  computed: {
    getSidebarItemStyle() {
      return {
        ...(this.active ? this.getAccentStyle : {}),
      };
    },
  },
  methods: {
    setHover() {
      this.$el.style
        .setProperty('--hover', `var(--${this.hoverColor})`);
      this.$el.style
        .setProperty('--hover-text', `var(--${this.hoverColor}-text)`);
    },
  },
};
</script>

<style scoped lang="scss">
  $border: 25px;
  .mat-sidebar-item {
    cursor: pointer;
    padding: 15px;
    display: block;
    border-top-right-radius: $border;
    border-bottom-right-radius: $border;
    margin-right: 15px;
    transition: all 0.05s;
    &:hover {
      background: var(--hover);
      color: var(--hover-text);
    }
  }
</style>

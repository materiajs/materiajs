<template>
  <div class="mat-tabs-wrapper">
    <div class="mat-tabs">
      <slot />
      <div
        class="mat-tabs-ink-line"
        :style="inkLinePosition"
      ></div>
    </div>
  </div>
</template>

<script>
import t from 'vue-types';
import Velocity from 'velocity-animate';

export default {
  name: 'TabsComponent',
  props: {
    value: t.number.def(0),
  },
  data: () => ({
    tabAmount: 0,
  }),
  created() {
    this.$on('tabAdded', this.onTabAdded);
  },
  computed: {
    inkLinePosition() {
      if (this.tabAmount) {
        const left = this.$children.slice(0, this.value)
          .map(child => child.$el.clientWidth)
          .reduce((acc, current) => acc + current, 0);
        const width = this.$children[this.value] && this.$children[this.value].$el.clientWidth;
        return {
          ...this.getAccentStyle,
          left: `${left}px`,
          width: `${width}px`,
        };
      }
      return null;
    },
  },
  methods: {
    onTabAdded() {
      this.tabAmount = this.tabAmount + 1;
      this.$forceUpdate();
    },
    setActiveTab(tabIndex) {
      this.$emit('input', tabIndex);
    },
  },
  watch: {
    value(value) {
      const el = document.getElementsByClassName('mat-tab')[value];
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../../../styles/main";
  .mat-tabs-wrapper {
    position: relative;
    max-width: 100%;
  }
  .mat-tabs {
    font-size: 0;
    position: relative;
    white-space: nowrap;
    /*overflow-x: scroll;*/
    overscroll-behavior: none;
    overflow: scroll;
    width: 100%;
    -ms-overflow-style: none;  // IE 10+
    scrollbar-width: none;  // Firefox
    &::-webkit-scrollbar {
      display: none;  // Safari and Chrome
    }

    &-ink-line {
      background: black;
      bottom: 0;
      height: 2px;
      left: 0;
      position: absolute;
      transition: all 0.3s ease;
      will-change: left, width;
    }
  }
</style>

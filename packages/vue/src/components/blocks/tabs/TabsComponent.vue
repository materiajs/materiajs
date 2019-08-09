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
import themeable, { defaultPrimaryColor } from '../../../mixins/themeable';

export default {
  name: 'TabsComponent',
  mixins: [
    themeable,
  ],
  props: {
    color: defaultPrimaryColor,
    value: t.number.def(0),
  },
  data: () => ({
    tabAmount: 0,
  }),
  created() {
    this.$on('tabAdded', this.onTabAdded);
  },
  mounted() {
    const slider = this.$el.querySelector('.mat-tabs');
    let isDown = false;
    let startX;
    let scrollLeft;
    let moved;

    slider.addEventListener('mousedown', (e) => {
      moved = false;
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', (e) => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
      moved = true;
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1; // scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });
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
      const boxOffset = this.$el.clientWidth / 2;
      const leftSiblingsWidth = this.$children
        .slice(0, tabIndex)
        .map(child => child.$el.clientWidth)
        .reduce((acc, current) => acc + current, 0);
      const childOffset = this.$children[tabIndex].$el.offsetWidth;
      const left = (leftSiblingsWidth - boxOffset) - childOffset;
      const doc = this.$el.querySelector('.mat-tabs');
      doc.scrollTo({ left, behavior: 'smooth' });
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../../../styles/main";
  .mat-tabs-wrapper {
    position: relative;
  }
  .mat-tabs {
    font-size: 0;
    position: relative;
    white-space: nowrap;
    overflow-x: scroll;
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

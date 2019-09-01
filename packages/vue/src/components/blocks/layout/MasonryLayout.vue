<template>
  <div class="mat-masonry-layout">
    <slot/>
  </div>
</template>

<script>
export default {

  name: 'MasonryLayout',
  created() {
    window.addEventListener('resize', this.resizeAllGridItems);
  },
  methods: {
    resizeAllGridItems() {
      this.$nextTick(() => {
        this.$children[0].children
          .forEach(el => {
            this.resizeGridItem(el);
          })
      });
    },

    resizeGridItem(item) {
      const grid = this.$children[0];
      // const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
      const rowHeight = 15;
      // const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
      const rowGap = 3;
      const rowSpan = Math.ceil((item.child.$el.scrollHeight + rowGap) / (rowHeight + rowGap));
      item.child.$el.style.gridRowEnd = `span ${rowSpan}`;
    },
  }
};
</script>

<style scoped>

</style>

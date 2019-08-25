<template>
  <div class="mat-masonry-layout">

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
      if (!this.listNotes || !this.listNotes.items) {
        return;
      }
      this.$nextTick(() => {
        const allItems = this.listNotes.items.map(note => note.id)
          .map(id => this.$refs[id]);
        allItems.forEach((item) => {
          this.resizeGridItem(item);
        });
      });
    },
    resizeGridItem(item) {
      if (item && item.length) {
        const grid = document.getElementsByClassName('notes-wrapper')[0];
        const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
        const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
        const rowSpan = Math.ceil((item[0].$el.scrollHeight + rowGap) / (rowHeight + rowGap));
        item[0].$el.style.gridRowEnd = `span ${rowSpan}`;
      }
    },
  }
};
</script>

<style scoped>

</style>

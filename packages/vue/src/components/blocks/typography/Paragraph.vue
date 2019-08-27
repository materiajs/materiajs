<template functional>
  <div
    class="mat-paragraph"
    :class="{ [size]: size }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Paragraph',
  props: {
    // size: t.oneOf(['xs', 'small', 'regular', 'large', 'xl']),
  },
};
</script>

<style scoped lang="scss">
  @import "../../../styles/typography";
  .mat-paragraph {
    font-size: 1rem;
    line-height: 1.75;
  }
</style>

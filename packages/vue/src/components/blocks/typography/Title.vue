<template>
  <div
    ref="contentEditable"
    :contenteditable="contentEditable"
    class="mat-title"
    :class="{ [size]: size, subtitle }"
    v-on-clickaway="update"
    :style="{ 'font-weight': bold ? 'bold' : 'initial' }"
  >
    <slot>
      {{ value }}
    </slot>
  </div>
</template>

<script>
import t from 'vue-types';
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: 'Title',
  mixins: [clickaway],
  props: {
    bold: t.bool.def(false),
    value: t.string.def(''),
    size: t.oneOf(['xs', 'small', 'regular', 'large', 'xl']),
    subtitle: t.bool.def(false),
    contentEditable: t.bool.def(false),
  },
  methods: {
    update() {
      if (this.contentEditable) {
        const el = this.$refs.contentEditable;
        this.$emit('input', el.innerText);
      }
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../../../styles/main";
  @import "../../../styles/typography";
  .mat-title {
    font-size: 2rem;
    display: flex;
    align-items: center;
  }
</style>

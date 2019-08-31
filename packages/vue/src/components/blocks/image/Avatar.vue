<template>
  <img
    class="mat-avatar"
    :class="[size]"
    :style="style"
    :src="src" :alt="alt">
</template>

<script>
import t from 'vue-types';
import sizeable from '../../../mixins/sizeable';

export default {
  name: 'Avatar',
  mixins: [
    sizeable,
  ],
  props: {
    src: t.string,
    alt: t.string,
    borderRadius: t.string.def('50%'),
  },
  computed: {
    style() {
      return {
        'border-radius': this.borderRadius,
      };
    },
  },
};
</script>

<style scoped lang="scss">
  .mat-avatar {
    max-width: 100%;
    max-height: 100%;
    border: 2px solid white;
    box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.3);
    &.xs {
      width: 32px;
      height: 32px;
    }
    &.small {
      width: 45px;
      height: 45px;
    }
    &.regular {
      width: 100px;
      height: 100px;
    }
  }
</style>

<template>
  <div
    class="mat-title"
    :class="{ [size]: size, subtitle }"
    :style="{ color: textColor }"
  >
    <slot>
      {{ value }}
    </slot>
  </div>
</template>

<script>
import t from 'vue-types';
import themeable from '../../../mixins/themeable';

export default {
  name: 'Title',
  mixins: [
    themeable,
  ],
  props: {
    value: t.string.def(''),
    size: t.oneOf(['xs', 'small', 'regular', 'large', 'xl']),
    subtitle: t.bool.def(false),
  },
  computed: {
    textColor() {
      const key = `${this.isAnyDark ? 'dark-' : ''}${this.subtitle ? 'secondary-text' : 'primary-text'}`;
      return this.theme.colors[key];
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../../../styles/main";
  $size-values: 1rem 1.5rem 2rem 2.5rem;
  $size-list: xs small regular large;
  .mat-title {
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    @each $size in $size-list {
      $i: index($size-list, $size);
      &.#{$size} {
        font-size: nth($size-values, $i);
        &.subtitle {
          font-size: calc(#{nth($size-values, $i)} * 0.8);
        }
      }
    }

    @media screen and (max-width: 767px){
      @each $size in $size-list {
        $i: index($size-list, $size);
        &.#{$size} {
          font-size: calc(#{nth($size-values, $i)} * 0.8);
          &.subtitle {
            font-size: calc(#{nth($size-values, $i)} * 0.64);
          }
        }
      }
    }
  }
</style>

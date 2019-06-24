<template>
  <div
    @click.stop="onClickCheckbox"
    class="mat-checkbox">
    <div
      :class="{ checked: value }"
      class="mat-checkbox-box mat-frame mat-flex-center">
      <i class="fas fa-check mat-absolute-center"></i>
    </div>
    <div class="mat-checkbox-label">
      {{ text }}
      <slot />
    </div>
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'mat-checkbox',
  props: {
    text: t.string,
    value: t.bool.def(false),
    size: t.oneOf(['regular', 'small', 'large']),
  },
  methods: {
    onClickCheckbox() {
      this.$emit('input', !this.value);
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../../../styles/main";

  $frame-size: 20px;
  .mat-checkbox {
    align-items: center;
    cursor: pointer;
    display: inline-flex;
    &-box {
      border-radius: 5px;
      color: white;
      font-size: 14px;
      display: inline-block;
      margin-right: 10px;
      min-height: $frame-size;
      min-width: $frame-size;
      padding: 0;
      transition: all 0.1s ease-in-out;
      i {
        opacity: 0;
        transition: all 0.1s ease-in-out;
        font-size: 12px;
      }

      &.checked {
        background: $primary-color;
        border: 1px solid $primary-color;
        i {
          opacity: 1;
        }
      }
    }
  }
</style>

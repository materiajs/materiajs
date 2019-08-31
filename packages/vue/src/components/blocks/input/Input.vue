<template>
  <div
    @click="onClickInputWrapper"
    class="mat-input"
    :class="{ focused: isFocused, [size]: size }"
    :style="inputStyle"
    v-on-clickaway="onInputBlur"
    v-mat-round="this.round"
  >
    <slot />
    <input
      v-if="type !== 'textarea'"
      ref="blox-input-ref"
      :value="value"
      :type="type"
      :disabled="disabled"
      @input="onInputChange"
      @focus="onInputFocus"
      v-mat-round="this.round"
    >
    <textarea
      v-else
      ref="blox-input-ref"
      :value="value"
      @input="onInputChange"
      @focus="onInputFocus"
    />
    <slot name="input-right" />
    <div
      v-if="showClearButton"
      @click.stop="clearValue"
      class="mat-input-clear-button">
      <i class="fa fa-times-circle"></i>
    </div>
    <div
      class="mat-input-placeholder"
      :class="{ focused: isFocused, raised: placeholderRaised }"
      :style="placeholderStyle"
    >
      <div class="mat-frame-placeholder-bg"></div>
      {{ placeholder }}
    </div>
  </div>
</template>

<script>
import t from 'vue-types';
import { mixin as clickaway } from 'vue-clickaway';
import themeable from '../../../mixins/themeable';
import roundable from '../../../mixins/roundable';

export default {
  name: 'mat-input',
  mixins: [
    clickaway,
    roundable,
    themeable,
  ],
  props: {
    disabled: t.bool.def(false),
    focused: t.bool.def(false),
    focusBorderColor: t.string.def('white'),
    placeholder: t.string.def('Enter text'),
    raisePlaceholder: t.bool.def(false),
    showClearButton: t.bool.def(false),
    type: t.oneOf(['text', 'number', 'password', 'textarea']),
    value: t.string.def(''),
    size: t.string,
  },
  data: () => ({
    inputFocused: false,
  }),
  computed: {
    isFocused() {
      return this.focused || this.inputFocused;
    },
    placeholderRaised() {
      return this.raisePlaceholder || (this.value && this.value.length > 0) || this.inputFocused;
    },
    inputStyle() {
      return {
        'border-color': `var(--${this.isFocused ? this.accentColor : this.focusBorderColor })`,
      };
    },
    placeholderStyle() {
      return {
        color: `var(--${this.isFocused ? this.accentColor : this.focusBorderColor })`,
      };
    },
  },
  methods: {
    onInputChange(inputEvent) {
      const { value } = inputEvent.target;
      this.$emit('input', value);
    },
    onClickInputWrapper() {
      this.$refs['blox-input-ref'].focus();
    },
    onInputFocus() {
      this.$emit('focus', true);
      this.inputFocused = true;
    },
    onInputBlur() {
      console.log('inout blur');
      if (this.inputFocused) {
        this.$emit('focus', false);
        this.inputFocused = false;
      }
    },
    clearValue() {
      this.$emit('input', '');
      this.$emit('cleared', true);
      this.onInputBlur();
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../../../styles/main";

  .mat-input {
    cursor: text;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    border: 1px solid;
    min-width: 250px;
    height: 60px;
    &.small {
      height: initial;
    }
    input {
      flex: 1;
      background: rgba(0,0,0,0);
      color: inherit;
      padding: 15px;
      font-size: 0.9em;
    }
    textarea {
      border: none;
      resize: vertical;
      outline: none;
      flex: 1;
      font-family: inherit;
      font-size: 1rem;
      height: 200px;
    }
    &-placeholder {
      margin: 0 -3px;
      padding: 0 3px;
      position: absolute;
      top: 50%;
      left: 15px;
      transform: translateY(-50%);
      transition: top $standard-transition-t-e, font-size $standard-transition-t-e;
      user-select: none;

      &.raised {
        .mat-frame-placeholder-bg {
          content: '';
          position: absolute;
          width: 100%;
          height: 50%;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          z-index: -1;
        }
        top: 10px;
        font-size: 0.7em;
      }
    }

    &-clear-button {
      cursor: pointer;
      margin: -10px;
      padding: 10px;
    }
  }
</style>

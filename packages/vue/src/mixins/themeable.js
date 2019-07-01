import t from 'vue-types';
import { createNamespacedHelpers } from 'vuex';
import isEmpty from 'lodash/isEmpty';
import theme from '../styles/themes';

const colors = {
  PRIMARY: 'primary',
  PRIMARY_LIGHT: 'primary-light',
  ACCENT: 'accent',
  WARN: 'warn',
};

const defaultColors = [
  'default',
  colors.PRIMARY,
  colors.PRIMARY_LIGHT,
  colors.ACCENT,
  colors.WARN,
];

const defaultPrimaryColor = t.oneOf(defaultColors).def(colors.PRIMARY);
const defaultAccentColor = t.oneOf(defaultColors).def(colors.ACCENT);

export {
  colors,
  defaultColors,
  defaultPrimaryColor,
  defaultAccentColor,
};

const { mapState } = createNamespacedHelpers('materiajs');

export default {
  props: {
    // :dark overrides global dark mode
    dark: t.any,
    color: t.oneOf(defaultColors).def('default'),
    backgroundGradient: t.array.def([]),
  },
  computed: {
    ...mapState({
      darkMode: 'darkMode',
      stateTheme: 'theme',
    }),
    isAnyDark() {
      if (this.dark !== undefined) {
        return this.dark;
      }
      return this.darkMode;
    },
    theme() {
      if (!this.stateTheme) {
        return {
          colors: {},
        };
      }
      return this.stateTheme;
    },
    colorKey() {
      return `${this.isAnyDark ? 'dark-' : ''}${this.color}`;
    },
    primaryColor() {
      return this.theme.colors[`${this.isAnyDark ? 'dark-' : ''}primary`];
    },
    toggledColor() {
      return this.theme && (this.theme.colors[this.colorKey] || this.theme.colors[this.color]);
    },
    background() {
      if (isEmpty(this.backgroundGradient)) {
        return this.toggledColor;
      }
      const gradients = this.backgroundGradient.map(color => this.theme.colors[(this.isAnyDark ? 'dark-' : '') + color]);
      return `linear-gradient(${gradients.join(',')})`;
    },
    backgroundTextColor() {
      return this.parseTextColor(this.background);
    },
  },
  methods: {
    parseTextColor(color) {
      if (!color) {
        return '';
      }
      return (parseInt(color.replace('#', ''), 16) > 0xffffff / 2)
        ? this.theme.colors['primary-text'] : this.theme.colors['dark-primary-text'];
    },
  },
};

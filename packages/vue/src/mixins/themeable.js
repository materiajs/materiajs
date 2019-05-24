import t from 'vue-types';
import { createNamespacedHelpers } from 'vuex';
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

const white = '#FFF';

export default {
  props: {
    // :dark overrides global dark mode
    dark: t.any,
    color: t.oneOf(defaultColors).def('default'),
  },
  computed: {
    ...mapState([
      'darkMode',
    ]),
    isAnyDark() {
      if (this.dark !== undefined) {
        return this.dark;
      }
      return this.darkMode;
    },
    colorKey() {
      return `${this.isAnyDark ? 'dark-' : ''}${this.color}`;
    },
    getElementStyle() {
      const { textColor: color, background } = this;
      const styles = {
        color, background,
      };
      return styles;
    },
    theme() {
      if (this.$materiajs) {
        return this.$materiajs.theme;
      }
      return theme;
    },
    background() {
      return this.theme.colors[this.colorKey];
    },
    backgroundTextColor() {
      return this.parseTextColor(this.background);
    },
    textColor() {
      return this.backgroundTextColor;
    },
  },
  methods: {
    parseTextColor(color) {
      if (!color) {
        return '';
      }
      return (parseInt(color.replace('#', ''), 16) > 0xffffff / 2) ? '#000' : '#fff';
    },
  },
};

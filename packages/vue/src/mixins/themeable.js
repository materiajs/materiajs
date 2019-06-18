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
    primaryColor() {
      return this.theme.colors[`${this.isAnyDark ? 'dark-' : ''}primary`];
    },
    // getElementStyle() {
    //   const { background } = this;
    //   const styles = {
    //     color, background,
    //   };
    //   return styles;
    // },
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
    // textPrimaryColor() {
    //   return this.theme.colors[`${this.isAnyDark ? 'dark-' : ''}primary-text`];
    // },
    // textSecondaryColor() {
    //   return this.theme.colors[`${this.isAnyDark ? 'dark-' : ''}secondary-text`];
    // },
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

import t from 'vue-types';

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

export default {
  props: {
    accentColor: t.string.def(''),
    backgroundGradient: t.array.def([]),
    color: t.string.def(''),
    gradient: t.string.def(''),
    gradientColor: t.string.def(''),
  },
  computed: {
    getAccentStyle() {
      return {
        background: `var(--${this.accentColor})`,
        color: `var(--${this.accentColor}-text)`,
      };
    },
    getStyle() {
      if (!this.color) {
        return {};
      }
      return {
        background: `var(--${this.color})`,
        color: `var(--${this.color}-text)`,
      };
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

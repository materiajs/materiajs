import computeTextColor from './libraries/computeTextColor';
import { palette } from './styles/themes';

export default {
  palette,
  setTheme(theme) {
    Object.keys(theme)
      .forEach(key => this.setThemeVariable(key, theme[key]));
  },
  setThemeVariable(property, value) {
    let propertyName;
    if (property.slice(0, 2) !== '--') {
      propertyName = `--${property}`;
    } else {
      propertyName = property;
    }
    document.documentElement.style
      .setProperty(propertyName, value);
    document.documentElement.style
      .setProperty(`${propertyName}-text`, computeTextColor(value, true));
  },
  computeTextColor,
};

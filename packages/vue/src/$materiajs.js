import computeTextColor from './libraries/computeTextColor';

export default {
  setTheme(theme) {
    Object.keys(theme)
      .forEach(key => this.setThemeVariable(key, theme[key]))
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
      .setProperty(`${propertyName}-text-color`, computeTextColor(value, true));
  },
  computeTextColor,
};

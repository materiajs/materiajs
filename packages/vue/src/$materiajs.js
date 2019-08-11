import computeTextColor from './libraries/computeTextColor';

export default {
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

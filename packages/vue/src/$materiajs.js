const parseTextColor = (color) => {
  if (!color) {
    return '';
  }
  return (parseInt(color.replace('#', ''), 16) > 0xffffff / 2)
    ? '#212121' : '#fff';
};

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
      .setProperty(`${propertyName}-text-color`, parseTextColor(value));
  },
};

const parseTextColor = (color) => {
  if (!color) {
    return '';
  }
  return (parseInt(color.replace('#', ''), 16) > 0xffffff / 2)
    ? '#212121' : '#fff';
};

/* Hex to RGB conversion:
 * http://www.javascripter.net/faq/hextorgb.htm
 */
const cutHex = (h) => {
  return (h.charAt(0) === '#') ? h.substring(1, 7) : h;
};
const hexToR = (h) => {
  return parseInt((cutHex(h)).substring(0, 2), 16);
};
const hexToG = (h) => {
  return parseInt((cutHex(h)).substring(2, 4), 16);
};
const hexToB = (h) => {
  return parseInt((cutHex(h)).substring(4, 6), 16);
};

const computeTextColor = (color, simple) => {
  const r = hexToR(color);
  const g = hexToG(color);
  const b = hexToB(color);
  if (simple) {
    return ((r * 0.299 + g * 0.587 + b * 0.114) > 186)
      ? '#212121' : '#ffffff';
  } // elNse complex formula
  const uicolors = [r / 255, g / 255, b / 255];
  const c = uicolors.map((c) => {
    if (c <= 0.03928) {
      return c / 12.92;
    }
    return Math.pow((c + 0.055) / 1.055, 2.4);
  });
  const L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  return (L > 0.179) ? '#212121' : '#ffffff';
};

export default computeTextColor;

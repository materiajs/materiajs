export const palette = {
  //Light blue
  'light-blue-1': '#035388',
  'light-blue-2': '#0B69A3',
  'light-blue-3': '#127FBF',
  'light-blue-4': '#1992D4',
  'light-blue-5': '#2BB0ED',
  'light-blue-6': '#40C3F7',
  'light-blue-7': '#5ED0FA',
  'light-blue-8': '#81DEFD',
  'light-blue-9': '#B3ECFF',
  'light-blue-10': '#E3F8FF',
  // Cool grey
  'cool-grey-1': '#1F2933',
  'cool-grey-2': '#323F4B',
  'cool-grey-3': '#3E4C59',
  'cool-grey-4': '#52606D',
  'cool-grey-5': '#616E7C',
  'cool-grey-6': '#7B8794',
  'cool-grey-7': '#9AA5B1',
  'cool-grey-8': '#CBD2D9',
  'cool-grey-9': '#E4E7EB',
  'cool-grey-10': '#F5F7FA',
  // Pink (Vivid)
  'pink-vivid-1': '#620042',
  'pink-vivid-2': '#870557',
  'pink-vivid-3': '#A30664',
  'pink-vivid-4': '#BC0A6F',
  'pink-vivid-5': '#DA127D',
  'pink-vivid-6': '#E8368F',
  'pink-vivid-7': '#F364A2',
  'pink-vivid-8': '#FF8CBA',
  'pink-vivid-9': '#FFB8D2',
  'pink-vivid-10': '#FFE3EC',
  // Red (Vivid)
  'red-vivid-1': '#610316',
  'red-vivid-2': '#8A041A',
  'red-vivid-3': '#AB091E',
  'red-vivid-4': '#CF1124',
  'red-vivid-5': '#E12D39',
  'red-vivid-6': '#EF4E4E',
  'red-vivid-7': '#F86A6A',
  'red-vivid-8': '#FF9B9B',
  'red-vivid-9': '#FFBDBD',
  'red-vivid-10': '#FFE3E3',
};

const getColorsFromKey = (getKey, returnKey) => new Array(10).fill()
  .map((i, idx) => ({ key: `${returnKey}${idx > 0 ? `-${idx + 1}` : ''}`, value: palette[`${getKey}-${idx + 1}`] }))
  .reduce((prev, current) => ({
    ...prev,
    [current.key]: current.value,
  }), {});

export default {
  colors: {
    success: '#28a745',
    danger: '#F44336',
    warn: '#FF9800',
    default: '',
    white: '#ffffff',
  },
  palette,
  themes: {
    palette1: {
      ...getColorsFromKey('light-blue', 'primary'),
      ...getColorsFromKey('cool-grey', 'accent'),
      ...getColorsFromKey('pink-vivid', 'support'),
      ...getColorsFromKey('red-vivid', 'danger'),
    },
    green: {
      primary: '#388E3C',
      'primary-light': '#4CAF50',
      accent: '#00BCD4',
    },
    blue: {
      primary: '#1565c0',
      'primary-light': '#1e88e5',
      accent: '#78909c',
    },
  },
};

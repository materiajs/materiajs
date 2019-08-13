const colors = {
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
};

const getColorsFromKey = (getKey, returnKey) => new Array(10).fill()
  .map((i, idx) => ({ key: `${returnKey}${idx > 0 ? `-${idx + 1}` : ''}`, value: colors[`${getKey}-${idx + 1}`] }))
  .reduce((prev, current) => ({
    ...prev,
    [current.key]: current.value,
  }), {});

export default {
  colors: {
    primary: '#1565c0',
    'primary-light': '#1e88e5',
    accent: '#f3f3f3',
    success: '#28a745',
    danger: '#F44336',
    warn: '#FF9800',
    default: '',
    'dark-primary': '#222437',
    'dark-primary-light': '#1c1e2f',
    'dark-accent': '#4f5b62',
    'dark-default': '#222437',
    white: '#ffffff',
  },
  themes: {
    palette1: {
      ...getColorsFromKey('light-blue', 'primary'),
      ...getColorsFromKey('cool-grey', 'accent'),
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

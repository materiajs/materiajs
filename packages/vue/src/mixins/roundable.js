import t from 'vue-types';

export default {
  props: {
    round: t.oneOfType([t.number, t.string]).def(0),
  },
};

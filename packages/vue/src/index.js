import VueMq from 'vue-mq';
import merge from 'lodash/merge';
import materiaJsStore from './store';
import * as blocks from './components/blocks/index';
import * as composites from './components/composites/index';
import * as structures from './components/structures/index';
import theme from './styles/themes';

const components = {
  ...blocks,
  ...composites,
  ...structures,
};

export default {
  install: (Vue, options) => {
    Vue.prototype.$materiajs = {
      theme: merge(theme, options ? options.theme : {}),
    };
    Object.keys(components)
      .forEach((name) => {
        Vue.component(name, components[name]);
      });
    Vue.use(VueMq, {
      breakpoints: { // default breakpoints - customize this
        xs: 360,
        sm: 480,
        md: 768,
        lg: 1250,
        xl: Infinity,
      },
      defaultBreakpoint: 'lg', // customize this for SSR
    });
  },
  materiaJsStore,
};

import VueMq from 'vue-mq';
import * as blocks from './components/blocks/index';
import * as composites from './components/composites/index';
import * as structures from './components/structures/index';
import { theme, darkTheme } from './styles/themes';

const components = {
  ...blocks,
  ...composites,
  ...structures,
};

export default {
  install: (Vue, options) => {
    Vue.prototype.$toolblox = {
      theme: {
        ...theme,
        ...(options ? options.theme : {}),
      },
      darkTheme: {
        ...darkTheme,
        ...(options ? options.darkTheme : {}),
      },
      dark: false,
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
};

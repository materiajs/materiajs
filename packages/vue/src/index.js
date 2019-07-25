import VueMq from 'vue-mq';
import materiaJsStore from './store';
import $materiajs from './$materiajs';
import * as blocks from './components/blocks/index';
import * as composites from './components/composites/index';
import * as structures from './components/structures/index';
import themes from './styles/themes';

const components = {
  ...blocks,
  ...composites,
  ...structures,
};

export default {
  install: (Vue, { store, options }) => {
    Vue.prototype.$materiajs = $materiajs;
    store.registerModule('materiajs', materiaJsStore);
    Object.keys(components)
      .forEach((name) => {
        Vue.component(name, components[name]);
      });
    Object.keys(themes.colors)
      .forEach((key) => {
        $materiajs.setThemeVariable(key, themes.colors[key]);
      });
    if (options && options.themeName) {
      store.dispatch('materiajs/setThemeByName', options.themeName);
    }
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

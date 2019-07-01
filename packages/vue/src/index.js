import VueMq from 'vue-mq';
import materiaJsStore from './store';
import * as blocks from './components/blocks/index';
import * as composites from './components/composites/index';
import * as structures from './components/structures/index';

const components = {
  ...blocks,
  ...composites,
  ...structures,
};

export default {
  install: (Vue, { store, options }) => {
    store.registerModule('materiajs', materiaJsStore);
    Object.keys(components)
      .forEach((name) => {
        Vue.component(name, components[name]);
      });
    document.body.style.setProperty('--accent', '#f3f3f3');
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

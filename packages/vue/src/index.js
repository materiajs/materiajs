import VueMq from 'vue-mq';
import materiaJsStore from './store';
import $materiajs from './$materiajs';
import roundable from './directives/roundable';
import * as blocks from './components/blocks/index';
import * as composites from './components/composites/index';
import * as structures from './components/structures/index';
import themes from './styles/themes';

const components = {
  ...blocks,
  ...composites,
  ...structures,
};

const addToTheme = (object) => {
  Object.keys(object)
    .forEach((key) => {
      $materiajs.setThemeVariable(key, object[key]);
    });
};

export default {
  install: (Vue, { store, options }) => {
    Vue.prototype.$materiajs = $materiajs;
    Vue.directive('mat-round', roundable);
    store.registerModule('materiajs', materiaJsStore);
    Object.keys(components)
      .forEach((name) => {
        Vue.component(name, components[name]);
      });
    addToTheme(themes.colors);
    // Overwrite
    if (options && options.colors) addToTheme(options.colors);
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
};

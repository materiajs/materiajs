import VueMq from 'vue-mq';
import $materiajs from './$materiajs';
import * as blocks from './components/blocks/index';
import * as composites from './components/composites/index';
import * as structures from './components/structures/index';
import themes, { palette } from './styles/themes';
import { registerMixins } from './mixins';
import registerDirectives from './directives';
import './styles/_main.scss';

const components = {
  ...blocks,
  ...composites,
  ...structures,
};

export default {
  install: (Vue, { options }) => {
    Vue.prototype.$materiajs = $materiajs;
    registerMixins(Vue);
    registerDirectives(Vue);
    Object.keys(components)
      .forEach((name) => {
        Vue.component(name, components[name]);
      });
    $materiajs.setTheme(themes.colors);
    $materiajs.setTheme(themes.themes.palette1);
    // Overwrite
    if (options.theme) {
      $materiajs.setTheme(themes.themes[options.theme]);
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
  palette,
};

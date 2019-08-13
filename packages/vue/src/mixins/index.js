import Themeable from './themeable';
import MediaQuery from './media-query';

export { default as layout } from './layout';
export { default as position } from './position';
export { default as sizeable } from './sizeable';
export { default as themeable } from './themeable';
export { default as mediaQuery } from './media-query';

export const registerMixins = (Vue) => {
  Vue.mixin(Themeable);
  Vue.mixin(MediaQuery);
};

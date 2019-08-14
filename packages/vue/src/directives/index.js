import padding from './padding';
import roundable from './roundable';

export default (Vue) => {
  Vue.directive('mat-round', roundable);
  Vue.directive('mat-padding', padding);
};

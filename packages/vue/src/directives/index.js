import padding from './padding';
import roundable from './roundable';
import background from './background';

export default (Vue) => {
  Vue.directive('mat-round', roundable);
  Vue.directive('mat-padding', padding);
  Vue.directive('mat-background', background);
};

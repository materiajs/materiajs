import MateriaJs from '@materiajs/vue';
// eslint-disable-next-line
import Vue from 'vue';

export default ({ store }) => {
  Vue.use(MateriaJs);
  window.onNuxtReady(() => {
    store.registerModule('materiajs', MateriaJs.materiaJsStore, { preserveState: false });
  });
};

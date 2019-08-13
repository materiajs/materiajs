import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import MateriaJs from '.';

Vue.use(Vuex);
const store = new Vuex.Store({});
Vue.config.productionTip = false;
Vue.use(MateriaJs, {
  store,
  options: {
    theme: 'palette1',
  },
});

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');

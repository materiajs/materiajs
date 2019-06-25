import Vue from 'vue';
import Vuex from 'vuex';
import materiajs from './store';
import App from './App.vue';
import toolblox from '.';

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    materiajs,
  },
});
Vue.config.productionTip = false;
Vue.use(toolblox, {});

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');

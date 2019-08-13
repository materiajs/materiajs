import Vue from 'vue';
import App from './App.vue';
import MateriaJs from '.';

Vue.config.productionTip = false;
Vue.use(MateriaJs, {
  options: {
    theme: 'palette1',
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app');

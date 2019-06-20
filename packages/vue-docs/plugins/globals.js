// eslint-disable-next-line
import Vue from 'vue';
import DocsCode from '../components/Code.vue';
import ComponentLink from '../components/ComponentLink.vue';
import ComponentList from '../components/ComponentList.vue';
import ProfileExample from '../components/examples/Profile.vue';

Vue.component('docs-code', DocsCode);
Vue.component('component-link', ComponentLink);
Vue.component('component-list', ComponentList);
Vue.component('profile-example', ProfileExample);

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.`;

Vue.prototype.$lorem = lorem;

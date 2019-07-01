// eslint-disable-next-line
import Vue from 'vue';
import DocsCode from '../components/Code.vue';
import ComponentLink from '../components/ComponentLink.vue';
import ComponentList from '../components/ComponentList.vue';
import ProfileExample from '../components/examples/Profile.vue';

// Tabs
import TabsBasic from '../components/examples/tabs/Basic.vue';

// Menu
import MenuToolbarExample from '../components/examples/menu/MenuToolbarExample.vue';
import MenuButtonExample from '../components/examples/menu/MenuButtonExample.vue';
import MenuToolbarWindow from '../components/examples/menu/MenuToolbarWindow.vue';

// Button
import ButtonBasicExample from '../components/examples/button/Basic.vue';
import ButtonBasicGroupExample from '../components/examples/button/BasicButtonGroup.vue';

// Profile
import ProfileAvatarName from '../components/examples/profile/ProfileAvatarName.vue';

// Table
import TableExample from '../components/examples/table/TableExample.vue';

Vue.component('docs-code', DocsCode);
Vue.component('component-link', ComponentLink);
Vue.component('component-list', ComponentList);
Vue.component('profile-example', ProfileExample);
Vue.component('tabs-basic', TabsBasic);
Vue.component('menu-toolbar-example', MenuToolbarExample);
Vue.component('menu-button-example', MenuButtonExample);
Vue.component('menu-toolbar-window', MenuToolbarWindow);

Vue.component('button-basic-example', ButtonBasicExample);
Vue.component('button-basic-group-example', ButtonBasicGroupExample);

Vue.component('table-example', TableExample);

Vue.component('profile-avatar-name', ProfileAvatarName);

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.`;

Vue.prototype.$lorem = lorem;

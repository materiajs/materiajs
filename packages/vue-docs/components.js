export default {
  tabs: {
    title: 'Tabs',
    introduction: `The Tabs component is a navigation component that can be used to toggle between
      components in a page. An array of Tab components should be passed into its default
      slot. You will notice this tabs component being used extensively throughout these
      docs.<br/><br/>
      When a Tab child is selected the bar underneath will highlight the selected tab.`,
    componentList: [
      {
        route: '/window',
        text: 'Window',
      },
      {
        route: '/card',
        text: 'Card',
      },
    ],
    sections: [
      {
        component: 'tabs-basic',
      },
      {
        component: 'profile-example',
      },
    ],
  },
  window: {
    title: 'Window',
    introduction: `The window component is a layout component which 
      transitions components into and out of view horizontally.
    `,
    componentList: [
      {
        route: '/tabs',
        text: 'Tabs',
      },
    ],
    sections: [
      {
        component: 'profile-example',
      },
    ],
  },
  menu: {
    title: 'Menu',
    introduction: `The Menu component is a floating box which can be used to create input and navigation
      components.
    `,
    componentList: [
      {
        route: '/toolbar',
        text: 'Toolbar',
      },
      {
        route: '/button',
        text: 'Button',
      },
      {
        route: '/card',
        text: 'Card',
      },
    ],
    sections: [
      {
        component: 'menu-button-example',
      },
      {
        component: 'menu-toolbar-example',
      },
      {
        component: 'menu-toolbar-window',
      },
    ],
  },
  toolbar: {
    title: 'Toolbar',
    introduction: 'Toolbar paragraph',
    componentList: [
      {
        route: '/button',
        text: 'Button',
      },
      {
        route: '/card',
        text: 'Card',
      },
    ],
    sections: [
      {
        component: 'menu-toolbar-example',
      },
    ],
  },
  button: {
    title: 'Button',
    introduction: 'Buttons paragraph',
    sections: [
      {
        component: 'button-basic-example',
      },
      {
        component: 'button-basic-group-example',
      },
    ],
  },
};

<template>
  <div class="page-tabs">
    <mat-title>Tabs</mat-title>
    <mat-paragraph>
      The Tabs component is a navigation component that can be used to toggle between
      components in a page. An array of Tab components should be passed into its default
      slot. You will notice this tabs component being used extensively throughout these
      docs.
      <mat-spacer></mat-spacer>
      When a Tab child is selected the bar underneath will highlight the selected tab.
      <mat-spacer />
    </mat-paragraph>
    <component-list :component-list="componentList" />
    <mat-title size="small">
      Usage
    </mat-title>
    <!-- EXAMPLE 1-->
    <mat-title size="xs">
      Basic example
      <mat-spacer />
      <mat-nav-link @click="() => (showTabs1Code = !showTabs1Code)">
        <mat-padding>
          <mat-fa icon="code" />
        </mat-padding>
      </mat-nav-link>
    </mat-title>
    <mat-paragraph>
      Here we are binding an integer to the <code>&lt;mat-tabs&gt;</code> component and passing
      relevant integers to the child <code>&lt;mat-tabs&gt;</code> components
    </mat-paragraph>
    <mat-spacer />
    <mat-tabs v-model="tabs1">
      <mat-tab :tab="0">
        Home
      </mat-tab>
      <mat-tab :tab="1">
        Components
      </mat-tab>
      <mat-tab :tab="2">
        Source code
      </mat-tab>
    </mat-tabs>
    <mat-spacer></mat-spacer>
    <mat-expansion-item :show="showTabs1Code">
      <docs-code :value="singleCode" lang="html" />
    </mat-expansion-item>

    <!-- EXAMPLE 2-->
    <mat-spacer />
    <mat-title size="xs">
      Tabs and Window
      <mat-spacer />
      <mat-nav-link @click="() => (showTabs2Code = !showTabs2Code)">
        <mat-padding>
          <mat-fa icon="code" />
        </mat-padding>
      </mat-nav-link>
    </mat-title>
    <mat-paragraph>
      In this example we are using another component Window with Tabs. When a Tab is
      selected, the Window component will toggle between corresponding Window Items.
    </mat-paragraph>
    <mat-spacer />
    <mat-card>
      <mat-tabs v-model="tabs2">
        <mat-tab :tab="0">
          Home
        </mat-tab>
        <mat-tab :tab="1">
          Components
        </mat-tab>
        <mat-tab :tab="2">
          Source code
        </mat-tab>
      </mat-tabs>
      <mat-spacer />
      <mat-window :value="tabs2">
        <mat-window-item :value="0">
          <mat-padding padding="5px">
            Home
          </mat-padding>
        </mat-window-item>
        <mat-window-item :value="1">
          <mat-padding padding="5px">
            Components
            <div>
              Content here
            </div>
          </mat-padding>
        </mat-window-item>
        <mat-window-item :value="2">
          <mat-padding padding="5px">
            Source code
          </mat-padding>
        </mat-window-item>
      </mat-window>
    </mat-card>
    <mat-spacer />
    <mat-expansion-item :show="showTabs2Code">
      <docs-code :value="singleCode" lang="html" />
    </mat-expansion-item>
  </div>
</template>

<script>
export default {
  name: 'index.vue',
  data: () => ({
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
    tabs1: 0,
    tabs2: 0,
    showTabs1Code: false,
    showTabs2Code: false,
    singleCode: '<mat-tabs v-model="tabs1">\n'
      + '  <mat-tab :tab="0">Home</mat-tab>\n'
      + '  <mat-tab :tab="1">Components</mat-tab>\n'
      + '  <mat-tab :tab="2">Source code</mat-tab>\n'
      + '</mat-tabs>',
  }),
};
</script>

<style scoped>

</style>

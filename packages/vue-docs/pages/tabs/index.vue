<template>
  <div class="page-tabs">
    <mat-title>Tabs</mat-title>
    <mat-paragraph>
      The Tabs component is a navigation component that can be used to toggle between
      components in a page. An array of Tab components should be passed into its default
      slot. You will notice this tabs component being used extensively throughout these
      docs.
      <br>
      <br>
      When a Tab child is selected the bar underneath will highlight the selected tab.
      <mat-spacer />
      The <component-link route="/select" value="Window" /> component can used alongside
      Tabs and Tab components
      to create some interactive UIs.
    </mat-paragraph>
    <mat-spacer />
    <mat-spacer />

    <!-- EXAMPLE 1-->
    <mat-toolbar
      :shadow="false"
      size="small"
      color="accent">
      Basic example
      <mat-spacer />
      <mat-nav-link @click="() => (showTabs1Code = !showTabs1Code)">
        <mat-fa icon="code" />
      </mat-nav-link>
    </mat-toolbar>
    <mat-spacer />
    <mat-paragraph>
      Here we are binding an integer to the <code>&lt;mat-tabs&gt;</code> component and passing
      relevant integers to the child <code>&lt;mat-tabs&gt;</code> components
    </mat-paragraph>
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
    <mat-toolbar
      :shadow="false"
      size="small"
      color="accent">
      Tabs and Window
      <mat-spacer />
      <mat-nav-link @click="() => (showTabs2Code = !showTabs2Code)">
        <mat-fa icon="code" />
      </mat-nav-link>
    </mat-toolbar>
    <mat-spacer />
    <mat-paragraph>
      In this example we are using another component Window with Tabs. When a Tab is
      selected, the Window component will toggle between corresponding Window Items.
    </mat-paragraph>
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
          <mat-card>
            Home
          </mat-card>
        </mat-padding>
      </mat-window-item>
      <mat-window-item :value="1">
        <mat-padding padding="5px">
          <mat-card>
            Components
          </mat-card>
        </mat-padding>
      </mat-window-item>
      <mat-window-item :value="2">
        <mat-padding padding="5px">
          <mat-card>
            Source code
          </mat-card>
        </mat-padding>
      </mat-window-item>
    </mat-window>
    <mat-spacer />
    <mat-expansion-item :show="showTabs2Code">
      <docs-code :value="singleCode" lang="html" />
    </mat-expansion-item>
  </div>
</template>

<script>
import DocsCode from '../../components/Code.vue';
import ComponentLink from '../../components/ComponentLink.vue';

export default {
  name: 'index.vue',
  data: () => ({
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
  components: {
    DocsCode,
    ComponentLink,
  },
};
</script>

<style scoped>

</style>

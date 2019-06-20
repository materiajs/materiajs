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
      Profile page example
      <mat-spacer />
    </mat-title>
    <mat-paragraph>
      You can see an example of how the Tabs component can be used in a Profile
      page here.
    </mat-paragraph>
    <mat-spacer />
    <profile-example />
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
    showTabs1Code: false,
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

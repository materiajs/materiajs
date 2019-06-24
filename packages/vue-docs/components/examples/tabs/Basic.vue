<template>
  <div class="tabs-basic">
    <mat-title size="xs">
      Basic example
      <mat-spacer />
      <mat-nav-link @click="() => (showTabsCode = !showTabsCode)">
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
    <mat-tabs v-model="tabs">
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
    <mat-expansion-item :show="showTabsCode">
      <docs-code :value="singleCode" lang="html" />
    </mat-expansion-item>
  </div>
</template>

<script>
export default {
  name: 'basic',
  data: () => ({
    tabs: 0,
    showTabsCode: false,
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

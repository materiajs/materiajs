<template>
  <div class="single-select">
    <mat-toolbar
      ref="toolbar"
      size="small"
      color="primary-light"
      :shadow="false"
    >
      Single value
      <mat-spacer />
      <mat-nav-link @click="() => (showCode = !showCode)">
        Source
      </mat-nav-link>
    </mat-toolbar>
    <mat-spacer />
    <mat-select
      v-model="singleValue"
      placeholder="Select single"
      :single-value="true"
      :options="singleSelect"
    />
    <mat-expansion-item :show="showCode">
      <mat-tabs v-model="singleSelectTab">
        <mat-tab :tab-key="0">Template</mat-tab>
        <mat-tab :tab-key="1">Script</mat-tab>
      </mat-tabs>
      <mat-window :value="singleSelectTab">
        <mat-window-item :value="0">
          <mat-padding padding="15px">
            <mat-code :value="singleCode" lang="html" />
          </mat-padding>
        </mat-window-item>
        <mat-window-item :value="1">
          <mat-padding padding="15px">
            <mat-code :value="singleCodeJs" lang="javascript" />
          </mat-padding>
        </mat-window-item>
      </mat-window>
    </mat-expansion-item>
  </div>
</template>

<script>
export default {
  name: 'SingleSelect',
  data: () => ({
    showCode: false,
    singleValue: {},
    singleSelectTab: 0,
    singleSelect: [
      { value: 'Andy' },
      { value: 'Gary' },
      { value: 'Aoife' },
      { value: 'Chrissy' },
      { value: 'Cooper' },
    ],
    singleCode: '<mat-select\n'
      + '  v-model="singleValue"\n'
      + '  placeholder="Select single"\n'
      + '  :single-value="true"\n'
      + '  :options="singleSelect"\n'
      + '/>',
    singleCodeJs: 'singleSelect: [\n'
      + '  { value: \'Andy\' },\n'
      + '  { value: \'Gary\' },\n'
      + '  { value: \'Aoife\' },\n'
      + '  { value: \'Chrissy\' },\n'
      + '  { value: \'Cooper\' },\n'
      + '],',
  }),
};
</script>

<style scoped>

</style>

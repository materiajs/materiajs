<template>
  <div class="single-select">
    <tb-toolbar
      ref="toolbar"
      size="small"
      color="primary-light"
      :shadow="false"
    >
      Single value
      <tb-spacer />
      <tb-nav-link @click="() => (showCode = !showCode)">
        Source
      </tb-nav-link>
    </tb-toolbar>
    <tb-spacer />
    <tb-select
      v-model="singleValue"
      placeholder="Select single"
      :single-value="true"
      :options="singleSelect"
    />
    <tb-expansion-item :show="showCode">
      <tb-tabs v-model="singleSelectTab">
        <tb-tab :tab-key="0">Template</tb-tab>
        <tb-tab :tab-key="1">Script</tb-tab>
      </tb-tabs>
      <tb-window :value="singleSelectTab">
        <tb-window-item :value="0">
          <tb-padding padding="15px">
            <tb-code :value="singleCode" lang="html" />
          </tb-padding>
        </tb-window-item>
        <tb-window-item :value="1">
          <tb-padding padding="15px">
            <tb-code :value="singleCodeJs" lang="javascript" />
          </tb-padding>
        </tb-window-item>
      </tb-window>
    </tb-expansion-item>
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
    singleCode: '<tb-select\n'
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

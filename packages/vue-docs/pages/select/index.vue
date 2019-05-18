<template>
  <div class="select-index">
    <tb-title>Select</tb-title>
    <tb-title :subtitle="true" size="xs">
      Examples
    </tb-title>
    <tb-line-break color="accent" />
    <tb-spacer />
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
    <tb-spacer />
    <tb-select
      v-model="multipleBasicValue"
      placeholder="Select multiple (Hide selected)"
      :hide-selected="true"
      :options="multipleBasic"
    />
    <br>
    <tb-select
      v-model="multipleWithCheckboxesValue"
      placeholder="Select multiple with checkboxes"
      :show-checkboxes="true"
      :options="multipleWithChecboxes"
    />
    <tb-spacer />
    <tb-select
      :single-value="true"
      :close-on-select="true"
      :options="singleSelect"
    >
      <template slot="trigger">
        <tb-button>Trigger slot</tb-button>
      </template>
      <template slot="item" slot-scope="{ option }">
        Item: {{ option.value }}
      </template>
    </tb-select>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data: () => ({
    singleSelectTab: 0,
    multipleBasicValue: [],
    multipleWithCheckboxesValue: [],
    showCode: false,
    singleValue: {},
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
    multipleBasic: [
      { value: 'Andy' },
      { value: 'Gary' },
      { value: 'Aoife' },
      { value: 'Chrissy' },
      { value: 'Cooper' },
    ],
    multipleWithChecboxes: [
      { value: 'Andy' },
      { value: 'Gary' },
      { value: 'Aoife' },
      { value: 'Chrissy' },
      { value: 'Cooper' },
    ],
  }),
};
</script>

<style lang="scss" scoped>
  .select-index {
    margin: 15px auto;
    max-width: 800px;
  }
</style>

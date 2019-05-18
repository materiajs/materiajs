<template>
  <div class="select-index">
    <tb-title>Select</tb-title>
    <tb-title :subtitle="true" size="xs">
      Examples
    </tb-title>
    <tb-line-break color="accent" />
    <tb-spacer />
    <single-select />
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
      :options="multipleBasic"
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
import SingleSelect from '../../components/select/SingleSelect.vue';

export default {
  name: 'Index',
  components: {
    SingleSelect,
  },
  data: () => ({
    multipleBasicValue: [],
    multipleWithCheckboxesValue: [],
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

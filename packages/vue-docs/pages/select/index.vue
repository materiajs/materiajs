<template>
  <div class="select-index">
    <mat-title>Select</mat-title>
    <mat-title :subtitle="true" size="xs">
      Examples
    </mat-title>
    <mat-line-break color="accent" />
    <mat-spacer />
    <component-viewer
      v-for="(component, key) in componentList"
      :key="key"
      v-bind="component" />
    <single-select />
    <mat-spacer />
    <mat-select
      v-model="multipleBasicValue"
      placeholder="Select multiple (Hide selected)"
      :hide-selected="true"
      :options="multipleBasic"
    />
    <br>
    <mat-select
      v-model="multipleWithCheckboxesValue"
      placeholder="Select multiple with checkboxes"
      :show-checkboxes="true"
      :options="multipleWithChecboxes"
    />
    <mat-spacer />
    <mat-select
      :single-value="true"
      :close-on-select="true"
      :options="multipleBasic"
    >
      <template slot="trigger">
        <mat-button>Trigger slot</mat-button>
      </template>
      <template slot="item" slot-scope="{ option }">
        Item: {{ option.value }}
      </template>
    </mat-select>
  </div>
</template>

<script>
import MatSelect from '@materiajs/vue/src/components/structures/select/Select.vue';
import SingleSelect from '../../components/select/SingleSelect.vue';
import ComponentViewer from '../../components/ComponentViewer.vue';

export default {
  name: 'Index',
  components: {
    ComponentViewer,
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
  computed: {
    componentList() {
      return [
        {
          title: 'Single select',
          component: MatSelect,
          componentProps: {
            placeholder: 'Select value',
            options: [
              { value: 'Andy' },
              { value: 'Gary' },
              { value: 'Aoife' },
              { value: 'Chrissy' },
              { value: 'Cooper' },
            ],
          },
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "~@materiajs/vue/src/styles/main";
  .select-index {
    margin: auto;
    max-width: 800px;
    padding: 15px;
  }
</style>

<template>
  <div class="select-index">
    <no-ssr>
      <mat-title>Select</mat-title>
      <mat-paragraph>
        Select components is used for collecting user provided information from a list of options.
      </mat-paragraph>
      <mat-spacer />
      <component-list :component-list="usedComponents" />
      <mat-spacer />
      <mat-title size="xs">
        Usage
      </mat-title>
      <template v-for="(component, key) in componentList">
        <mat-padding padding="15px 0">
          <component-viewer
            :key="key"
            v-bind="component">
          </component-viewer>
        </mat-padding>
      </template>
    </no-ssr>
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
    //   <component-link route="/input">Input</component-link>
    // <component-link route="/list">List</component-link>
    // <component-link route="/chip-list">ChipList</component-link>
    // <component-link route="/checkbox">Checkbox</component-link>
    // <component-link route="/action-box">ActionBox</component-link>
    usedComponents: [
      {
        route: '/input',
        text: 'Input',
      },
      {
        route: '/list',
        text: 'List',
      },
      {
        route: '/chip-list',
        text: 'ChipList',
      },
      {
        route: '/checkbox',
        text: 'Checkbox',
      },
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
            singleValue: true,
            options: [
              { value: 'Andy' },
              { value: 'Gary' },
              { value: 'Aoife' },
              { value: 'Chrissy' },
              { value: 'Cooper' },
            ],
          },
        },
        {
          title: 'Multi select',
          component: MatSelect,
          componentProps: {
            placeholder: 'Select multiple (hide selected)',
            hideSelected: true,
            options: [
              { value: 'Andy' },
              { value: 'Gary' },
              { value: 'Aoife' },
              { value: 'Chrissy' },
              { value: 'Cooper' },
            ],
          },
        },
        {
          title: 'Multi select with checkboxes',
          component: MatSelect,
          componentProps: {
            placeholder: 'Select multiple',
            showCheckboxes: true,
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
  .select-index {}
</style>

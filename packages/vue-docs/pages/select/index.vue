<template>
  <div class="select-index">
    <no-ssr>
      <mat-title>Select</mat-title>
      <mat-title :subtitle="true" size="xs">
        Examples
      </mat-title>
      <mat-line-break color="accent" />
      <mat-padding padding="30px 0">
        The Select component is a structure which uses the
        <nuxt-link to="input">Input</nuxt-link>,
        <nuxt-link to="list">List</nuxt-link>,
        <nuxt-link to="chip-list">ChipList</nuxt-link>,
        <nuxt-link to="checkbox">Checkbox</nuxt-link> and
        <nuxt-link to="action-box">ActionBox</nuxt-link> components.
      </mat-padding>
      <template v-for="(component, key) in componentList">
        <mat-padding padding="15px 0">
          <mat-card hide-on-mq="md">
              <component-viewer
                :key="key"
                v-bind="component" />
          </mat-card>
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
  .select-index {
    padding: 15px;
    margin: auto;
    max-width: 600px;
  }
</style>

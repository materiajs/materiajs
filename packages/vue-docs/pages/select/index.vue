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
      <mat-title size="xs">
        Basic example
        <mat-spacer />
        <mat-nav-link @click="() => (showCode = !showCode)">
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
      <mat-select
        v-model="singleValue"
        placeholder="Select single"
        :close-on-select="true"
        :single-value="true"
        :searchable="false"
        :options="singleSelect"
      />
    </no-ssr>
  </div>
</template>

<script>
import MatSelect from '@materiajs/vue/src/components/structures/select/Select.vue';

export default {
  name: 'Index',
  components: {
    MatSelect,
  },
  data: () => ({
    showCode: false,
    singleValue: {},
    singleSelect: [
      { value: 'Andy' },
      { value: 'Gary' },
      { value: 'Aoife' },
      { value: 'Chrissy' },
      { value: 'Cooper' },
    ],
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
};
</script>

<style lang="scss" scoped>
  @import "~@materiajs/vue/src/styles/main";
  .select-index {}
</style>

<template>
  <div class="component-viewer">
    <mat-toolbar
      ref="toolbar"
      size="small"
      :shadow="false"
      color="accent"
    >
      {{ title }}
      <mat-spacer />
      <mat-nav-link @click="() => (showCode = !showCode)">
        <mat-fa icon="code" />
      </mat-nav-link>
    </mat-toolbar>
    <mat-spacer />
    <template v-if="component">
      <component
        :is="component"
        v-model="value"
        v-bind="componentProps"
      >
        <slot :name="slotRef"></slot>
      </component>
    </template>
    <mat-spacer />
    <mat-expansion-item :show="showCode">
      <mat-tabs v-model="tab">
        <mat-tab :tab="0">Template</mat-tab>
        <mat-tab :tab="1">Script</mat-tab>
      </mat-tabs>
      <mat-window :value="tab">
        <mat-window-item :value="0">
          <mat-padding padding="15px">
            <mat-code :value="singleCode" lang="html" />
          </mat-padding>
        </mat-window-item>
        <mat-window-item :value="1">
          <mat-padding padding="15px">
            <mat-code :value="propsJson" lang="javascript" />
          </mat-padding>
        </mat-window-item>
      </mat-window>
    </mat-expansion-item>
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'ComponentViewer',
  props: {
    title: t.string.def('Component name'),
    component: t.object,
    componentProps: t.object.def({}),
    slotRef: t.string,
  },
  data: () => ({
    showCode: false,
    tab: 0,
    value: null,
    singleCode: '<mat-select\n'
      + '  v-model="singleValue"\n'
      + '  placeholder="Select single"\n'
      + '  :single-value="true"\n'
      + '  :options="singleSelect"\n'
      + '/>',
  }),
  computed: {
    propsJson() {
      return JSON.stringify(this.componentProps, null, 2);
    },
  },
};
</script>

<style scoped>

</style>

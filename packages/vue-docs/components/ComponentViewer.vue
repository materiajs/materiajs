<template>
  <div class="component-viewer">
    <tb-toolbar
      ref="toolbar"
      size="small"
      color="primary-light"
      :shadow="false"
    >
      {{ title }}
      <tb-spacer />
      <tb-nav-link @click="() => (showCode = !showCode)">
        Source
      </tb-nav-link>
    </tb-toolbar>
    <tb-spacer />
    <component
      v-if="component"
      :is="component"
    />
    <tb-select
      v-model="singleValue"
      placeholder="Select single"
      :single-value="true"
      :options="singleSelect"
    />
<!--    <tb-expansion-item :show="showCode">-->
<!--      <tb-tabs v-model="singleSelectTab">-->
<!--        <tb-tab :tab-key="0">Template</tb-tab>-->
<!--        <tb-tab :tab-key="1">Script</tb-tab>-->
<!--      </tb-tabs>-->
<!--      <tb-window :value="singleSelectTab">-->
<!--        <tb-window-item :value="0">-->
<!--          <tb-padding padding="15px">-->
<!--            <tb-code :value="singleCode" lang="html" />-->
<!--          </tb-padding>-->
<!--        </tb-window-item>-->
<!--        <tb-window-item :value="1">-->
<!--          <tb-padding padding="15px">-->
<!--            <tb-code :value="singleCodeJs" lang="javascript" />-->
<!--          </tb-padding>-->
<!--        </tb-window-item>-->
<!--      </tb-window>-->
<!--    </tb-expansion-item>-->
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'ComponentViewer',
  props: {
    title: t.string.def('Component name'),
  },
  data: () => ({
    showCode: false,
    component: t.object,
  }),
};
</script>

<style scoped>

</style>

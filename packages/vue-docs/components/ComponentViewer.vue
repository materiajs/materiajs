<template>
  <div class="component-viewer">
    <mat-toolbar
      ref="toolbar"
      size="small"
      color="primary-light"
      :shadow="false"
    >
      {{ title }}
      <mat-spacer />
      <mat-nav-link @click="() => (showCode = !showCode)">
        Source
      </mat-nav-link>
    </mat-toolbar>
    <mat-spacer />
    <template v-if="component">
      <component
        :is="component"
      />
    </template>
<!--    <mat-select-->
<!--      v-model="singleValue"-->
<!--      placeholder="Select single"-->
<!--      :single-value="true"-->
<!--      :options="singleSelect"-->
<!--    />-->
<!--    <mat-expansion-item :show="showCode">-->
<!--      <mat-tabs v-model="singleSelectTab">-->
<!--        <mat-tab :tab-key="0">Template</mat-tab>-->
<!--        <mat-tab :tab-key="1">Script</mat-tab>-->
<!--      </mat-tabs>-->
<!--      <mat-window :value="singleSelectTab">-->
<!--        <mat-window-item :value="0">-->
<!--          <mat-padding padding="15px">-->
<!--            <mat-code :value="singleCode" lang="html" />-->
<!--          </mat-padding>-->
<!--        </mat-window-item>-->
<!--        <mat-window-item :value="1">-->
<!--          <mat-padding padding="15px">-->
<!--            <mat-code :value="singleCodeJs" lang="javascript" />-->
<!--          </mat-padding>-->
<!--        </mat-window-item>-->
<!--      </mat-window>-->
<!--    </mat-expansion-item>-->
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

<template>
  <div id="app">
    <mat-navigation-layout
      color="dark-primary"
      :sidebar-overlay="true">
      <mat-toolbar
        slot="header"
        position="sticky"
        color="primary-light"
        :no-padding="true"
        top="0">
        <mat-nav-link>
          <mat-padding>
            Materia JS
          </mat-padding>
        </mat-nav-link>
        <mat-spacer />
      </mat-toolbar>
      <div class="main-wrapper">
        <div class="main-container">
          <TabWindow />
          <DragExample/>
          <mat-toast-list v-model="messages" />
          <mat-spacer />
          <mat-button-group>
            <mat-button
              color="danger"
              @click="onToast">Toast!</mat-button>
            <mat-button
              color="warn"
              @click="onClickButton">Modal</mat-button>
            <mat-button
              color="primary"
              @click="onClickButton">Push</mat-button>
          </mat-button-group>
          <mat-spacer />
          <mat-list :bordered="true">
            <mat-list-item>
              Andy
            </mat-list-item>
            <mat-list-item>
              Feely
            </mat-list-item>
          </mat-list>
          <mat-toast-list
            v-model="messages"
          />
          <mat-modal
            size="large" v-model="modal">
              <mat-toolbar
                position="sticky"
                top="0"
                color="primary">
                <div @click="() => modal = false">
                  Close
                </div>
              </mat-toolbar>
              <mat-scrollbar-layout>
                <mat-padding>
                  Hello
                </mat-padding>
                <mat-padding>
                  Hello
                </mat-padding>
              </mat-scrollbar-layout>
          </mat-modal>
<!--          <TableExample />-->
          <mat-spacer />
        </div>
      </div>
    </mat-navigation-layout>
  </div>
</template>

<script>
import TabWindow from './examples/TabWindow.vue';
import DragExample from "./examples/DragExample";

export default {
  name: 'app',
  components: {DragExample, TabWindow },
  data: () => ({
    messages: [],
    modal: false,
    showSidebar: true,
  }),
  methods: {
    onClickButton() {
      this.modal = true;
    },
    onToast() {
      this.messages.push({
        color: 'success',
        icon: 'check',
        text: 'Saved!',
        id: new Date().getTime(),
      });
    },
  },
};
</script>

<style lang="scss">
  @import "~highlight.js/styles/github.css";
  .main {
    width: 100%;
    &-wrapper {
      width: 50px;
      min-width: 100%;
    }
    &-container {
      margin: auto;
      max-width: 800px;
      padding: 15px;
    }
  }
  #default-body {
    display: flex;
  }
</style>

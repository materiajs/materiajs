<template>
  <div id="app">
    <mat-navigation-layout
      color="accent"
      :sidebar-overlay="true"
    >
      <mat-toolbar
        slot="header"
        position="sticky"
        color="primary"
        :no-padding="true"
        top="0">
        <mat-nav-link @click="showSidebar = !showSidebar">
          <mat-fa icon="bars" />
        </mat-nav-link>
        <mat-nav-link>
          <mat-padding>
            Materia JS
          </mat-padding>
        </mat-nav-link>
        <mat-spacer />
      </mat-toolbar>
      <mat-sidebar
        v-model="showSidebar"
        slot="nav"
        :overlay="true"
        color="accent"
      >
        <template slot-scope="{ overlay }">
          <mat-toolbar >
            MateriaJS
          </mat-toolbar>
          <mat-spacer />
          <mat-sidebar-item
            v-for="item in sidebarItems"
            :active="item.value === sidebarSelected"
            :key="item.value"
            accent-color="primary-4"
            hover-color="primary-2"
            @click="() => sidebarSelected = item.value"
          >
            <mat-fa :icon="item.icon" space="right" />{{ item.name }}
          </mat-sidebar-item>
        </template>
      </mat-sidebar>
      <div class="main-wrapper">
        <div class="main-container">
          <TabWindow />
          <mat-spacer />

          <DragExample/>
          <mat-spacer />

          <SelectExample/>
          <mat-spacer />

          <InputExample/>
          <mat-spacer />

          <CheckboxExample/>

          <div class="button-example">
            <mat-floating-button-group>
              <mat-button color="white" round="50" v-mat-padding="20">
                <mat-fa icon="plus" />
              </mat-button>
              <mat-button color="primary-5" round="50" v-mat-padding="20">
                <mat-fa icon="filter" />
              </mat-button>
            </mat-floating-button-group>
          </div>
          <mat-toast-list v-model="messages" />
          <mat-spacer />
          <mat-button-group>
            <mat-button
              color="danger-3"
              @click="onToast"
              v-mat-round="5"
              v-mat-padding="'15px 30px'"
            >Toast!</mat-button>
            <mat-button
              color="warn"
              @click="onClickButton">Modal</mat-button>
            <mat-button
              color="primary"
              @click="onClickButton">Push</mat-button>
          </mat-button-group>
          <mat-spacer />
          <mat-list
            v-mat-round="5"
            :bordered="true">
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
            color="white"
            size="large"
            v-model="modal"
          >
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
import DragExample from './examples/DragExample.vue';
import SelectExample from './examples/SelectExample.vue';
import InputExample from './InputExample.vue';
import CheckboxExample from "./examples/CheckboxExample";

export default {
  name: 'app',
  components: {
    CheckboxExample,
    InputExample, SelectExample, DragExample, TabWindow,
  },
  data: () => ({
    messages: [],
    modal: false,
    showSidebar: true,
    sidebarSelected: 'notes',
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
  computed: {
    sidebarItems() {
      return [
        { name: 'Notes', value: 'notes', icon: 'sticky-note' },
        { name: 'Bookmarks', value: 'bookmarks', icon: 'bookmark' },
        { name: 'Todo', value: 'todo', icon: 'tasks' },
        { name: 'Messages', value: 'messages', icon: 'envelope' },
      ];
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

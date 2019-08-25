<template>
  <div id="app">
    <mat-navigation-layout
      color="accent"
      gradient-color="accent-2"
      :sidebar-overlay="isMobile"
    >
      <mat-toolbar
        :shadow="true"
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
        color="accent"
      >
        <template slot-scope="{ overlay }">
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
          <mat-tabs
            v-model="tab"
            accent-color="primary-5"
          >
            <mat-tab :tab="0">Select</mat-tab>
            <mat-tab :tab="1">Input</mat-tab>
            <mat-tab :tab="2">Checkbox</mat-tab>
          </mat-tabs>
          <mat-window
            v-mat-round="'0 0 5px 5px'"
            v-model="tab"
            :draggable="true"
          >
            <mat-window-item><SelectExample/></mat-window-item>
            <mat-window-item><InputExample/></mat-window-item>
            <mat-window-item><CheckboxExample/></mat-window-item>
          </mat-window>
          <SelectExample/>
          <mat-spacer />
          <div v-mat-padding="15">
            <TabWindow />
          </div>
          <div class="button-example">
            <mat-floating-button-group>
              <mat-button @click="onClickButton" color="white" round="50" v-mat-padding="20">
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
              gradient-color="danger-5"
              gradient="to right"
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
import SelectExample from './examples/SelectExample.vue';
import InputExample from './examples/InputExample.vue';
import CheckboxExample from './examples/CheckboxExample.vue';

export default {
  name: 'app',
  components: {
    CheckboxExample,
    InputExample,
    SelectExample,
    TabWindow,
  },
  data: () => ({
    tab: 0,
    messages: [],
    modal: false,
    showSidebar: false,
    sidebarSelected: 'notes',
  }),
  methods: {
    onClickButton() {
      console.log('hello');
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
  .main {
    width: 100%;
    &-wrapper {
      width: 50px;
      min-width: 100%;
    }
    &-container {
    }
  }
  #default-body {
    display: flex;
  }
</style>

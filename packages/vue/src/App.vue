<template>
  <div id="app">
    <mat-navigation-layout :sidebar-overlay="true">
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
          <mat-toast-list v-model="messages" />
          <mat-button
            color="danger"
            @click="onClickButton">Push</mat-button>
          <mat-button
            color="warn"
            @click="onClickButton">Push</mat-button>
          <mat-button
            color="primary"
            @click="onClickButton">Push</mat-button>
          <mat-modal size="large" v-model="modal">
            <mat-toolbar color="primary">
              <div @click="() => modal = false">
                Close
              </div>
            </mat-toolbar>
            <mat-padding>
              Hello
            </mat-padding>
          </mat-modal>
<!--          <mat-table :columns="columns" :rows="rows">-->
<!--            <template slot="id" slot-scope="{ value }">-->
<!--              {{ value.value }}-->
<!--            </template>-->
<!--            <template slot="filter" slot-scope="{ addFilter, filters }">-->
<!--&lt;!&ndash;              <mat-input&ndash;&gt;-->
<!--&lt;!&ndash;                placeholder="Name"&ndash;&gt;-->
<!--&lt;!&ndash;                :value="filters.name"&ndash;&gt;-->
<!--&lt;!&ndash;                @input="value => filter('name', value)" />&ndash;&gt;-->
<!--&lt;!&ndash;              <mat-spacer />&ndash;&gt;-->
<!--              Gender-->
<!--              <mat-spacer />-->
<!--              <mat-button-group>-->
<!--                <mat-button-->
<!--                  v-for="(option, key) in options"-->
<!--                  :key="key"-->
<!--                  @click="() => setGenderFilter(filters, option.value, addFilter)"-->
<!--                  :color="filters.gender && filters.gender.value === option.value-->
<!--                  ? 'primary'-->
<!--                  : undefined"-->
<!--                >-->
<!--                  {{ option.value }}-->
<!--                </mat-button>-->
<!--              </mat-button-group>-->
<!--            </template>-->
<!--          </mat-table>-->
          <mat-spacer />
        </div>
      </div>
    </mat-navigation-layout>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'app',
  data: () => ({
    messages: [],
    modal: false,
    showSidebar: true,
    options: [{ value: 'male' }, { value: 'female' }],
    columns: [
      {
        name: 'name',
        header: 'Name',
      },
      {
        name: 'nat',
        header: 'Nationality',
      },
      {
        name: 'gender',
        header: 'Gender',
      },
      {
        name: 'email',
        header: 'Email',
      },
    ],
  }),
  computed: {
    darkIcon() {
      return this.darkMode ? 'sun' : 'moon';
    },
    rows() {
      return this.users.map(user => ({ ...user, name: `${user.name.first} ${user.name.last}` }));
    },
  },
  created() {
    const url = 'https://randomuser.me/api/?results=10';
    axios.get(url)
      .then((res) => {
        this.users = res.data.results;
      });
  },
  methods: {
    onClickButton() {
      this.modal = true;
      // this.messages.push({
      //   color: 'success',
      //   icon: 'check',
      //   text: 'Saved!',
      //   id: new Date().getTime(),
      // });
    },
    setGenderFilter(filters, value, addFilter) {
      if (filters.gender && filters.gender.value === value) {
        addFilter('gender', undefined);
      } else {
        addFilter('gender', ({ gender }, rowValue) => gender === rowValue, value);
      }
    },
    onClickGithub() {
      if (this.$store.state.materiajs.theme.colors.primary === '#1565c0') {
        this.$store.dispatch('materiajs/setThemeByName', 'green');
      } else {
        this.$store.dispatch('materiajs/setThemeByName', 'blue');
      }
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

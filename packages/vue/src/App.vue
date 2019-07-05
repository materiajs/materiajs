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
          <mat-table :columns="columns" :rows="rows">
            <template slot="id" slot-scope="{ value }">
              {{ value.value }}
            </template>
            <template slot="filter" slot-scope="{ addFilter, filters }">
<!--              <mat-input-->
<!--                placeholder="Name"-->
<!--                :value="filters.name"-->
<!--                @input="value => filter('name', value)" />-->
<!--              <mat-spacer />-->
              Gender
              <mat-spacer />
              <mat-button-group>
                <mat-button
                  v-for="(option, key) in options"
                  :key="key"
                  @click="() => setGenderFilter(filters, option.value, addFilter)"
                  :color="filters.gender && filters.gender.value === option.value
                  ? 'primary'
                  : undefined"
                >
                  {{ option.value }}
                </mat-button>
              </mat-button-group>
            </template>
          </mat-table>
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
    users: [],
    compDarkMode: false,
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

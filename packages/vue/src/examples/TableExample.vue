<template>
  <div class="table-example">
    <mat-table :columns="columns" :rows="rows">
      <template slot="id" slot-scope="{ value }">
        {{ value.value }}
      </template>
      <template slot="filter" slot-scope="{ addFilter, filters }">
        <mat-input
          placeholder="Name"
          :value="filters.name"
          @input="value => filter('name', value)"/>
        <mat-spacer/>
        Gender
        <mat-spacer/>
        <mat-button-group>
          <mat-button
            v-for="(option, key) in options"
            :key="key"
            @click="() => setGenderFilter"
            :color="filters.gender && filters.gender.value === option.value
                  ? 'primary'
                  : undefined"
          >
            {{ option.value }}
          </mat-button>
        </mat-button-group>
      </template>
    </mat-table>
  </div>
</template>
<script>
import axios from 'axios/index';

export default {
  name: 'TableExample',
  created() {
    const url = 'https://randomuser.me/api/?results=10';
    axios.get(url)
      .then((res) => {
        this.users = res.data.results;
      });
  },
  data: () => ({
    options: [{ value: 'male' }, { value: 'female' }],
    users: [],
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
    rows() {
      return this.users.map(user => ({ ...user, name: `${user.name.first} ${user.name.last}` }));
    },
  },
  methods: {
    setGenderFilter(filters, value, addFilter) {
      if (filters.gender && filters.gender.value === value) {
        addFilter('gender', undefined);
      } else {
        addFilter('gender', ({ gender }, rowValue) => gender === rowValue, value);
      }
    },
  },
};
</script>

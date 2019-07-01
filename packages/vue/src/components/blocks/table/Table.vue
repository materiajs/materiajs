<template>
  <div class="mat-table">
    <mat-card padding="0">
      <mat-toolbar
        size="small"
        :no-padding="true"
        color="primary-light"
        :shadow="false"
      >
        <mat-padding>
          Table name
        </mat-padding>
        <mat-spacer />
        <mat-nav-link @click="() => tableColumnsMenu = true">
          <mat-fa icon="cog" />
          <mat-menu
            position="bottom-right"
            v-model="tableColumnsMenu">
            <mat-list>
              <div
                v-for="column in columns"
                @click="setColumnVisibility(column.name, !visibleColumns[column.name])"
              >
                <mat-checkbox
                  :value="visibleColumns[column.name]"
                  @input="value => setColumnVisibility(column.name, value)">
                  {{ column.header }}
                </mat-checkbox>
              </div>
            </mat-list>
          </mat-menu>
        </mat-nav-link>
      </mat-toolbar>
      <table class="mat-table">
        <thead>
          <tr>
            <template v-for="column in columns">
              <th
                v-if="!hiddenColumns.includes(column.name)"
                @click="onClickColumnHeader(column.name)"
                :class="{ sorting: sortColumn === column.name }"
              >
                <mat-flex-layout>
                  {{ column.header }}
                  <mat-spacer />
                  <mat-fa
                    v-if="sortColumn === column.name"
                    icon="arrow-down"
                    :rotate="sortDirection === 'desc' ? 0 : 180"
                  />
                </mat-flex-layout>
              </th>
            </template>
          </tr>
        </thead>
        <tr
          v-for="(row, key) in sortedRows"
          :key="key"
        >
          <template v-for="column in visibleColumnNames">
            <td>
              <slot
                :name="column"
                :value="row[column]">
                  {{ row[column] }}
              </slot>
            </td>
          </template>
        </tr>
        <tfoot>
          <tr>
            <td colspan="99">Footer</td>
          </tr>
        </tfoot>
      </table>
    </mat-card>
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'Table',
  data: () => ({
    hiddenColumns: [],
    tableColumnsMenu: false,
    sortColumn: null,
    sortDirection: '',
  }),
  props: {
    rows: t.array.def([]),
    columns: t.array.def([]),
  },
  computed: {
    sortedRows() {
      if (this.sortDirection && !this.sortColumn) {
        return this.rows;
      }
      return [...this.rows].sort((a, b) => {
        const { sortColumn, sortDirection } = this;
        if (a[sortColumn] === b[sortColumn]) {
          return 0;
        }
        const result = sortDirection === 'desc' ? 1 : -1;
        return a[sortColumn] > b[sortColumn] ? (-result) : result;
      });
    },
    visibleColumns() {
      return this.columns
        .reduce((prev, column) => ({ ...prev, [column.name]: !this.hiddenColumns.includes(column.name) }), {});
    },
    visibleColumnNames() {
      return Object.keys(this.visibleColumns)
        .filter(columnName => this.visibleColumns[columnName]);
    },
  },
  methods: {
    setColumnVisibility(columnName, value) {
      if (!value) {
        this.hiddenColumns.push(columnName);
      } else {
        this.hiddenColumns.splice(this.hiddenColumns.indexOf(columnName), 1);
      }
    },
    onClickColumnHeader(columnName) {
      if (this.sortColumn === columnName) {
        if (this.sortDirection === 'desc') {
          this.sortDirection = 'asc';
        } else {
          this.sortDirection = 'desc';
          this.sortColumn = '';
        }
      } else {
        this.sortDirection = 'desc';
        this.sortColumn = columnName;
      }
    },
  },
};
</script>

<style scoped lang="scss">
  .mat-table {
    border-collapse: collapse;
    width: 100%;
    th {
      cursor: pointer;
      &.sorting {
        background: var(--accent);
      }
    }
    th, td {
      padding: 10px 15px;
      text-align: left;
      border-bottom: 1px solid var(--accent);
    }
    thead {
      border-bottom: 1px solid var(--accent);
    }
    tfoot {
      border-top: 1px solid var(--accent);
      td {
        text-align: right;
      }
    }
  }
</style>

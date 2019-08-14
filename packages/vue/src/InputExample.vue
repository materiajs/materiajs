<template>
  <div class="input-example">
    <mat-form @submit="onSubmit">
      <mat-input
        v-model="value"
        round="15"
        accent-color="dark-accent"
      />
      <mat-input v-model="password" type="password" round="15"/>
    </mat-form>
  </div>
</template>
<script>
export default {
  name: 'InputExample',
  data: () => ({
    value: 'Enter Text',
    password: '',
  }),
  methods: {
    onSubmit(event) {
      console.log('log');
    },
  },
};
</script>

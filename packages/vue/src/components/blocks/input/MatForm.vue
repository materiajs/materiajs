<template functional>
  <form
    @keyup.enter="listeners.submit"
    class="mat-form">
    <slot />
  </form>
</template>

<script>
export default {
  name: 'MatForm',
};
</script>

<style scoped lang="scss">
  .mat-form {
    /deep/ .mat-input {
      margin-bottom: 15px;
    }
  }
</style>

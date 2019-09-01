<template>
  <div class="mat-logo">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  name: 'MateriaLogo',
};
</script>

<style scoped lang="scss">
  .mat-logo {
    display: inline-grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1 fr);
    width: 20px;
    justify-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    grid-gap: 5px;
    padding: 5px;
    height: 20px;
    transition: all .6s cubic-bezier(.64,-0.34,.48,1.11);
    .box {
      background: white;
      height: 8px;
      width: 8px;
      border-radius: 1px;
      transition: all .4s cubic-bezier(.64,-0.34,.48,1.11);
      /*&:nth-child(1) {*/
      /*  transition-delay: .5s;*/
      /*}*/
      /*&:nth-child(2) {*/
      /*  transition-delay: .45s;*/
      /*}*/
      /*&:nth-child(3) {*/
      /*  transition-delay: .40s;*/
      /*}*/
      /*&:nth-child(4) {*/
      /*  transition-delay: .35s;*/
      /*}*/
    }
    &:hover {
      transform: rotate(180deg);
      .box {
        &:nth-child(1) {
          background-color: var(--light-blue-5);
          transition-delay: .0s;
        }
        &:nth-child(2) {
          background-color: var(--yellow-vivid-5);
          transition-delay: .05s;
        }
        &:nth-child(3) {
          background-color: var(--red-vivid-6);
          transition-delay: .1s;
        }
        &:nth-child(4) {
          background-color: var(--indigo-vivid-4);
          transition-delay: .15s;
        }
      }
    }
  }
</style>

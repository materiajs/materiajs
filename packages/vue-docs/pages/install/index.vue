<template>
  <div class="install-index">
    <mat-padding>
      <mat-title>Install guide</mat-title>
      <mat-spacer />
      <mat-paragraph>
        This page will explain how to install Materia JS into your Vue application.
        You can install into a
        Nuxt project as well with a little bit more configuration.
        <mat-spacer />
        First things first, lets install and add as a dependency to you project.
      </mat-paragraph>
      <mat-spacer />
      <docs-code value="npm install --save @materiajs/vue" lang="js" />
      <mat-spacer />
      <mat-paragraph>
        Then in your main file call Vue.use to install it globally. This will give
        you access to all components in MateriaJS as it registers them globally.
      </mat-paragraph>
      <mat-spacer />
      <docs-code :value="install" lang="js" />
    </mat-padding>
  </div>
</template>

<script>
export default {
  name: 'index',
  data: () => ({
    install: 'import MateriaJs from \'@materiajs/vue\';\n\nVue.use(MateriaJs);',
  }),
};
</script>

<style scoped>

</style>

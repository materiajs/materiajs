<template>
  <div
    @click="$emit('click')"
    class="mat-nav-link mat-flex-center mat-standard-transition"
    @click.native="e => $emit('click.native', e)"
  >
    <div class="mat-nav-link-wrapper">
      <template v-if="href">
        <a :href="href" :target="target">
          <slot />
        </a>
      </template>
      <slot v-else />
    </div>
  </div>
</template>

<script>
import t from 'vue-types';

export default {
  name: 'NavLink',
  props: {
    href: t.string,
    target: t.string,
  },
};
</script>

<style scoped lang="scss">
  .mat-nav-link {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    height: 100%;
    position: relative;
    user-select: none;
    border-radius: 3px;
    a {
      color: inherit;
      text-decoration: none;
    }

    &:hover {
      background: rgba(0,0,0,0.1);
    }
    &-wrapper {
      min-width: 60px;
      display: flex;
      justify-content: center;
    }
    @media (hover: none) {
      background: none !important;
    }
  }
</style>

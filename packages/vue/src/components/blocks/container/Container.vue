<template functional>
  <div
    class="mat-container"
    v-mat-background:[props.gradient]="[props.color, props.gradientColor]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container',
};
</script>

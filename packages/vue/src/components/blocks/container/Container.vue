<template functional>
  <div
    class="mat-container"
    v-mat-round="props.round"
    v-mat-background:[props.gradient]="[props.color, props.gradientColor]"
    v-mat-padding="props.padding"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container',
};
</script>

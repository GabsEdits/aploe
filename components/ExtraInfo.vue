<template>
  <small class="hide-on-mobile quick-info">
    <slot></slot>
  </small>
</template>

<style lang="scss">
.hide-on-mobile {
  @media (max-width: 48rem) {
    display: none;
  }

  @media (min-width: 48.0625rem) {
    display: block;
  }
}
</style>

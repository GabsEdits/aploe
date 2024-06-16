<template>
  <small class="hide-on-mobile quick-info">
    <slot></slot>
  </small>
</template>

<style lang="scss">
.quick-info {
  margin-top: 20%;
}

.hide-on-mobile {
  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 769px) {
    display: block;
  }
}
</style>

<template>
  <li>
    <span class="material-symbols-rounded icon">
      {{ icon }}
    </span>
    <h3 v-if="title">{{ translatable ? $t(title) : title }}}</h3>
    <p>
      <slot></slot>
    </p>
  </li>
</template>

<script setup lang="ts">
defineProps({
  icon: String,
  title: String,
  translatable: Boolean,
});
</script>

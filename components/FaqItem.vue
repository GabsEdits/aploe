<template>
  <article>
    <h1>{{ translatable ? $t(title) : title }}</h1>
    <summary>{{ translatable ? $t(content) : content }}</summary>
  </article>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  content: String,
  translatable: Boolean,
});
</script>

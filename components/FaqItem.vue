<template>
  <article>
    <h1>{{ $t(title) }}</h1>
    <summary>{{ $t(content) }}</summary>
  </article>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  content: String,
});
</script>

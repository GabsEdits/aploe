<template>
  <section class="external" :style="'background-color:' + background">
    <span class="material-symbols-rounded icon" :style="'color:' + iconColor">
      {{ icon }}
    </span>
    <h2>{{ translatable ? $t(title) : title }}</h2>
    <p v-if="description">{{ translatable ? $t(description) : description }}</p>
    <router-link
      v-if="isRouterLink"
      :to="link"
      :style="'background-color:' + linkColor"
      >{{ translatable ? $t(linkText) : linkText }}</router-link
    >
    <a v-else :href="link" :style="'background-color:' + linkColor">{{
      translatable ? $t(linkText) : linkText
    }}</a>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  title: String,
  description: String,
  icon: String,
  background: String,
  iconColor: String,
  link: String,
  linkText: String,
  linkColor: String,
  isRouterLink: Boolean,
  translatable: Boolean,
});
</script>

<style lang="scss">
.external {
  display: grid;
  place-items: center;
  gap: 0;
  border-radius: 1.25rem;
  padding: 3.75rem;
  color: var(--black);
  text-align: center;

  h2 {
    font-size: 1.875rem;
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 1rem;
  }

  a {
    display: inline-block;
    border-radius: 0.625rem;
    padding: 0.75rem 1.875rem;
    color: #000;
    font-weight: bold;
    font-size: 1.125rem;
    text-decoration: none;
  }
}
</style>

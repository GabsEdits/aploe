<template>
  <section class="external" :style="backgroundColor">
    <span class="material-symbols-rounded icon" :style="iconColor">
      {{ icon }}
    </span>
    <h2>{{ translatable ? $t(title) : title }}</h2>
    <p v-if="description">{{ translatable ? $t(description) : description }}</p>
    <router-link v-if="isRouterLink" :to="link" :style="linkColor">{{
      translatable ? $t(linkText) : linkText
    }}</router-link>
    <a v-else :href="link" :style="linkColor">{{
      translatable ? $t(linkText) : linkText
    }}</a>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  title?: String;
  description?: String;
  icon?: String;
  background?: String;
  backgroundDark?: String;
  iconColor?: String;
  iconColorDark?: String;
  link?: String;
  linkText?: String;
  linkColor?: String;
  linkColorDark?: String;
  isRouterLink?: Boolean;
  translatable?: Boolean;
}>();

const backgroundColor = computed(() => {
  const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return {
    backgroundColor: darkMode ? props.backgroundDark : props.background,
  };
});

const iconColor = computed(() => {
  const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return {
    color: darkMode ? props.iconColorDark : props.iconColor,
  };
});

const linkColor = computed(() => {
  const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return {
    backgroundColor: darkMode ? props.linkColorDark : props.linkColor,
  };
});
</script>

<style lang="scss">
.external {
  display: grid;
  place-items: center;
  gap: 0;
  border-radius: 1.25rem;
  padding: 3.75rem;
  color: white;
  text-align: center;

  @media (prefers-color-scheme: dark) {
    color: white;
  }

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
    color: black;
    font-weight: bold;
    font-size: 1.125rem;
    text-decoration: none;

    @media (prefers-color-scheme: dark) {
      color: white;

      &:hover {
        filter: brightness(1.8);
      }
    }
  }
}
</style>

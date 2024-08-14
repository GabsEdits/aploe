<template>
  <section id="features" :style="backgroundColor">
    <span class="material-symbols-rounded icon" :style="iconColor">
      {{ icon }}
    </span>
    <h2>{{ translatable ? $t(title) : title }}</h2>
    <ul>
      <slot></slot>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  title: String,
  icon: String,
  background: String,
  backgroundDark: String,
  iconColor: String,
  iconColorDark: String,
  translatable: Boolean,
});

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
</script>

<style lang="scss">
#features {
  margin-bottom: 20px;
  border-radius: 20px;
  background-color: #c5dde85f;
  padding: 3.125rem 0;
  text-align: center;

  h2 {
    margin-bottom: 1.25rem;
    font-size: 2rem;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin: 0 150px;
    padding: 0;
    list-style: none;

    @media screen and (max-width: 1653px) {
      grid-template-columns: repeat(2, 1fr);
      margin: 0 20px;
    }
  }

  li {
    border-radius: 10px;
    background-color: #c5dde86e;
    padding: 1.25rem;

    @media (prefers-color-scheme: dark) {
      background-color: #1a1a1a6e;
    }

    p {
      margin-bottom: 0.625rem;
      font-size: 1.0625rem;
    }
  }
}
</style>

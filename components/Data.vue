<template>
  <section id="data" :style="backgroundColor">
    <span class="material-symbols-rounded icon" :style="iconColor">
      {{ icon }}
    </span>
    <h2>{{ translatable ? $t(title) : title }}</h2>
    <p>{{ translatable ? $t(description) : description }}</p>
    <span id="apiData">{{ apiData }}</span>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";

const props = defineProps<{
  title?: string;
  description?: string;
  api?: string;
  fallback?: string;
  icon?: string;
  background?: string;
  backgroundDark?: string;
  iconColor?: string;
  iconColorDark?: string;
  translatable?: boolean;
}>();

const apiData = ref("");

function fetchData() {
  fetch(props.api)
    .then((response) => response.json())
    .then((data) => {
      if (data && data.data) {
        apiData.value = data.data;
      } else {
        apiData.value = props.fallback;
      }
      console.log("data: " + apiData.value);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      apiData.value = props.fallback;
    });
}

onMounted(() => {
  fetchData();
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
#data {
  display: grid;
  place-items: center;
  gap: 0px;
  animation: fadeInAnimation ease 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  margin: 1.25rem 0;
  border-radius: 1.25rem;
  padding: 3.75rem;
  color: black;
  text-align: center;

  @media (prefers-color-scheme: dark) {
    color: white;
  }

  h2 {
    font-size: 1.875rem;
  }

  p {
    margin-bottom: 1.875rem;
    font-size: 1.125rem;
  }

  #apiData {
    display: inline-block;
    margin: 0 auto;
    border-radius: 2.5rem;
    background-color: #2b2b2b;
    padding: 0.3125rem 2.8125rem;
    color: #fff;
    font-weight: 900;
    font-size: 1.875rem;
  }
}

.icon {
  cursor: default;
  margin-bottom: 0.625rem;
  font-size: 3.4375rem;
}
</style>

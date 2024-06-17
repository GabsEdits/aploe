<template>
  <section id="data" :style="'background-color:' + background">
    <span class="material-symbols-rounded icon" :style="'color:' + iconColor">
      {{ icon }}
    </span>
    <h2>{{ $t(title) }}</h2>
    <p>{{ $t(description) }}</p>
    <span id="apiData">{{ apiData }}</span>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

defineProps <
  {
    title: {
      type: String,
      default: "data.title",
    },
    description: {
      type: String,
      default: "data.desc",
    },
    api: {
      type: String,
      default: "https://api.example.com/data",
    },
    fallback: {
      type: String,
      default: "1000",
    },
    icon: {
      type: String,
      default: "car",
    },
    background: {
      type: String,
      default: "#fff",
    },
    iconColor: {
      type: String,
      default: "#000",
    },
  };

const apiData = ref("");

onMounted(() => {
  fetchTruckData();
});

function fetchTruckData() {
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      if (data && data.data) {
        apiData.value = data.data;
      } else {
        apiData.value = fallback;
      }
      console.log("data: " + apiData.value);
    })
    .catch((error) => {
      console.error("Error fetching truck data:", error);
      apiData.value = fallback;
    });
}
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
  color: var(--black);
  text-align: center;

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

  .icon {
    cursor: default;
    margin-bottom: 0.625rem;
    font-size: 3.75rem;
  }
}

.icon {
  cursor: default;
  margin-bottom: 0.625rem;
  font-size: 3.4375rem;
}
</style>

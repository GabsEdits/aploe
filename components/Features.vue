<template>
  <section id="features">
    <span class="material-symbols-rounded icon" :style="'color:' + iconColor">
      {{ icon }}
    </span>
    <h2>{{ $t(title) }}</h2>
    <ul>
      <slot></slot>
    </ul>
  </section>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  icon: String,
  background: String,
  iconColor: String,
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

    p {
      margin-bottom: 0.625rem;
      font-size: 1.0625rem;
    }
  }
}
</style>

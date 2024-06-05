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

<script setup>
defineProps({
  title: String,
  icon: String,
  background: String,
  iconColor: String,
});
</script>

<style lang="scss">
#features {
  background-color: #c5dde85f;
  border-radius: 20px;
  padding: 3.125rem 0;
  text-align: center;
  margin-bottom: 20px;

  h2 {
    font-size: 2rem;
    margin-bottom: 1.25rem;
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
    background-color: #c5dde86e;
    border-radius: 10px;
    padding: 1.25rem;

    p {
      font-size: 1.0625rem;
      margin-bottom: 0.625rem;
    }

    i {
      font-size: 3.125rem;
      margin-bottom: 1.25rem;
      color: var(--boek-green-3);
    }
  }
}
</style>

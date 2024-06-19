<template>
  <section id="faq-section">
    <span class="material-symbols-rounded icon" :style="'color:' + iconColor">
      help
    </span>
    <h2>{{ $t(title) }}</h2>
    <div class="questions">
      <slot></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  title: String,
});
</script>

<style lang="scss">
#faq-section {
  border-radius: 20px;
  background-color: #2e2e2e;
  padding: 40px;
  color: #fff;
  text-align: center;

  h2 {
    margin-bottom: 40px;
    color: #fff;
    font-size: 2rem;
  }

  .questions {
    grid-gap: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr) !important;
    }

    @media screen and (max-width: 1138px) and (min-width: 768px) {
      grid-gap: 10px;
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }

  article {
    border-radius: 10px;
    background-color: #414141;
    padding: 30px;

    h3 {
      margin-bottom: 15px;
      font-weight: bold;
      font-size: 1.5rem;
    }

    summary {
      color: #fff;
      font-size: 1.1rem;
      line-height: 1.5;
      text-align: left;
    }
  }
}
</style>

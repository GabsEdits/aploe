<template>
  <section id="faq-section">
    <span class="material-symbols-rounded icon" :style="'color:' + iconColor"> help </span>
    <h2>{{ $t(title) }}</h2>
    <div class="questions">
        <slot></slot>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String,
});
</script>

<style lang="scss">
#faq-section {
  background-color: #2e2e2e;
  text-align: center;
  padding: 40px;
  border-radius: 20px;
  color: var(--white);

  article {
    background-color: #414141;
    padding: 30px;
    border-radius: 10px;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 15px;
  }

  summary {
    text-align: left;
    font-size: 1.1rem;
    line-height: 1.5;
    color: var(--faq-color);
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 40px;
    color: #fff;
  }

  .questions {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }
}

@media (max-width: 768px) {
  .questions {
    grid-template-columns: 1fr !important;
  }
}

@media screen and (max-width: 1138px) {
  .questions {
    grid-template-columns: repeat(2, 1fr) !important;
    grid-gap: 10px;
  }
}
</style>

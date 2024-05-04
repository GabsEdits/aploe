<template>
  <section class="external" :style="'background-color:' + background">
    <span class="material-symbols-rounded icon" :style="'color:' + iconColor">
      {{ icon }}
    </span>
    <h2>{{ $t(title) }}</h2>
    <p>{{ $t(description) }}</p>
    <a :href="link" :style="'background-color:' + linkColor">{{ $t(linkText) }}</a>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  icon: String,
  background: String,
  iconColor: String,
  link: String,
  linkText: String,
  linkColor: String,
});
</script>

<style lang="scss">
.external {
  color: var(--black);
  border-radius: 20px;
  display: grid;
  place-items: center;
  gap: 0px;
  padding: 60px;
  text-align: center;

  h2 {
    font-size: 30px;
  }

  p {
    font-size: 16px;
    margin-bottom: 40px;
  }

  a {
    display: inline-block;
    padding: 12px 30px;
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
    color: #000;
    border-radius: 10px;
  }
}
</style>

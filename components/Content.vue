<template>
  <section id="content-element" :style="'background-color:' + background">
    <span class="material-symbols-rounded icon" :style="'color:' + iconColor">
      {{ icon }}
    </span>
    <h2>{{ translatable ? $t(title) : title }}</h2>
    <p>{{ translatable ? $t(description) : description }}</p>
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  description: String,
  icon: String,
  iconColor: String,
  background: String,
  translatable: Boolean,
});
</script>

<style lang="scss">
#content-element {
  display: grid;
  place-items: center;
  margin: 20px 0;
  border-radius: 20px;
  padding-top: 40px;

  h2 {
    font-size: 200%;
  }

  p {
    margin-top: 0.5%;
    margin-bottom: 30px;
    font-size: medium;
  }

  #map {
    position: relative;
    margin-bottom: 25px;
    border-radius: 0 0 20px 20px;
    width: 100%;
    height: 700px;
  }
}
</style>

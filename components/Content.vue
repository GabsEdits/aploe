<template>
  <section id="content-element">
    <span class="material-symbols-rounded icon" :style="'color:' + iconColor">
      {{ icon }}
    </span>
    <h2>{{ $t(title) }}</h2>
    <p>{{ $t(description) }}</p>
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  description: String,
  icon: String,
  iconColor: String,
});
</script>

<style lang="scss">
#content-element {
  display: grid;
  place-items: center;
  padding-top: 40px;
  margin: 20px 0;
  border-radius: 20px;
  background-color: #e8ffdda6;

  h2 {
    font-size: 200%;
  }

  p {
    font-size: medium;
    margin-top: 0.5%;
    margin-bottom: 30px;
  }

  #map {
    position: relative;
    height: 700px;
    border-radius: 0 0 20px 20px;
    width: 100%;
    margin-bottom: 25px;
  }
}
</style>

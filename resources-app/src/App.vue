<template>
  <section>
    <the-header></the-header>
    <the-resources></the-resources>
  </section>
</template>

<script>
import TheResources from './components/learning-resources/TheResources.vue';
import TheHeader from './components/TheHeader.vue';

export default {
  components: { TheHeader, TheResources },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>

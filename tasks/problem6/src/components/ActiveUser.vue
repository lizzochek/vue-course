<template>
  <section>
    <h2>Name: {{ name }}</h2>
    <h3>Age: {{ age }}</h3>
  </section>
</template>

<script>
export default {
  props: ["name", "age"],
};
</script>

<template>
  <h3>{{ counter }}</h3>
  <button @click="addOne">Add 1</button>
  <p>We do more</p>
</template>

<script>
export default {
  methods: {
    addOne() {
      this.$store.dispatch('increment', { value: 1 });
    },
  },
  computed: {
    counter() {
      return this.$store.getters.normalizedCounter;
    },
  },
};
</script>

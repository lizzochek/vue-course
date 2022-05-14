<template>
  <button @click="addOne">Add 1</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      this.$store.commit('increment', { value: 1 });
    },
  },
};
</script>

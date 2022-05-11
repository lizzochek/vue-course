<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsVisible">
      <li>Phone: {{ phone }}</li>
      <li>Email: {{ email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["name", "phone", "email"],
  data() {
    return {
      detailsVisible: true,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
  },
};
</script>

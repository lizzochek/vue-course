<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsVisible">
      <li>Phone: {{ friend.phone }}</li>
      <li>Email: {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsVisible: true,
      friend: {
        id: "liza",
        name: "Liza Dolhova",
        phone: "0523226586",
        email: "liza@gmail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
  },
};
</script>

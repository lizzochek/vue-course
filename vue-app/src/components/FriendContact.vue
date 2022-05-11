<template>
  <li>
    <h2>{{ name }} {{ isFavourite ? "(Favourite)" : "" }}</h2>
    <button @click="toggleFavourite">Toggle favourite</button>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsVisible">
      <li>Phone: {{ phone }}</li>
      <li>Email: {{ email }}</li>
    </ul>
    <button @click="deleteFriend">Delete</button>
  </li>
</template>

<script>
const idValidator = function (id) {
  if (id) return true;

  console.warn("Id is missing");
  return false;
};
export default {
  //   props: ["name", "phone", "email"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: String,
    email: String,
    isFavourite: Boolean,
  },
  emits: {
    "toggle-favourite": idValidator,
    "delete-friend": idValidator,
  },
  data() {
    return {
      detailsVisible: true,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
    toggleFavourite() {
      this.$emit("toggle-favourite", this.id);
    },
    deleteFriend() {
      this.$emit("delete-friend", this.id);
    },
  },
};
</script>

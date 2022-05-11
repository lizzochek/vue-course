<template>
  <form @submit.prevent="onFormSubmit">
    <div>
      <label>Name</label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <label>Phone</label>
      <input type="text" v-model="phone" />
    </div>
    <div>
      <label>Email</label>
      <input type="text" v-model="email" />
    </div>
    <button>Add a friend</button>
  </form>
</template>

<script>
export default {
  emits: ["add-friend"],
  data() {
    return {
      name: "",
      email: "",
      phone: "",
    };
  },
  methods: {
    onFormSubmit() {
      const newFriend = {
        id: this.name.toLowerCase(),
        name: this.name,
        phone: this.phone,
        email: this.email,
      };

      this.resetForm();
      this.$emit("add-friend", newFriend);
    },
    resetForm() {
      this.name = "";
      this.phone = "";
      this.email = "";
    },
  },
};
</script>

<style></style>

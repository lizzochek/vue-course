<template>
  <section>
    <h1>Active user</h1>
    <active-user :name="name" :age="age"></active-user>
    <user-data @add-data="addUserData"></user-data>
  </section>
</template>

<script>
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";
export default {
  components: { ActiveUser, UserData },
  data() {
    return {
      name: "",
      age: "",
    };
  },
  methods: {
    addUserData(name, age) {
      this.name = name;
      this.age = age;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>

<template>
  <section>
    <form @submit.prevent="addData">
      <div>
        <label>Name</label>
        <input type="text" v-model="name" />
      </div>
      <div>
        <label>Age</label>
        <input type="text" v-model="age" />
      </div>
      <button>Add data</button>
    </form>
  </section>
</template>

<script>
export default {
  emits: ["add-data"],
  data() {
    return {
      name: "",
      age: "",
    };
  },
  methods: {
    addData() {
      this.$emit("add-data", this.name, this.age);
      this.name = "";
      this.age = "";
    },
  },
};
</script>

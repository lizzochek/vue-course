const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    addOne(num) {
      this.counter = this.counter + num;
    },
    reduceOne(num) {
      this.counter = this.counter - num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    submitForm() {
      alert("Submitted!");
    },
    confirmName() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#events");

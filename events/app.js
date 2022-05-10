const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) this.counter = 0;
    },
    // name(value) {
    //   if (value === "") {
    //     return "";
    //   } else {
    //     this.fullName = value + " " + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     return "";
    //   } else {
    //     this.fullName = this.name + " " + value;
    //   }
    // },
  },

  computed: {
    fullName() {
      if (this.name === "" || this.lastName === "") {
        return "";
      } else {
        return this.name + " " + this.lastName;
      }
    },
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
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");

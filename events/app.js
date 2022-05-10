const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  computed: {
    fullName() {
      if (this.name === "") return "";
      return this.name + " " + "Dolhova";
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

Vue.createApp({
  data() {
    return {
      firstOutput: "",
      confirmedOutput: "",
    };
  },
  methods: {
    showAlert() {
      alert("Button clicked");
    },
    showFirstInput(event) {
      this.firstOutput = event.target.value;
    },
    confirmOutput(event) {
      this.confirmedOutput = event.target.value;
    },
  },
}).mount("#assignment");

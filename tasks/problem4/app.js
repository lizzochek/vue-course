Vue.createApp({
  data() {
    return {
      firstInputStyle: "",
      visibility: "visible",
      secondInputStyle: "",
    };
  },
  methods: {
    onFirstInput(event) {
      this.firstInputStyle = event.target.value;
      event.target.value = "";
    },
    onToggleButton() {
      this.visibility = this.visibility === "visible" ? "hidden" : "visible";
    },
    onSecondInput(event) {
      this.secondInputStyle = event.target.value;
      event.target.value = "";
    },
  },
}).mount("#assignment");

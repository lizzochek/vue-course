Vue.createApp({
  data() {
    return {
      tasks: [],
      inputValue: "",
      isVisible: true,
      buttonCaption: "Hide list",
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.inputValue);
      this.inputValue = "";
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    toggleList() {
      this.isVisible = !this.isVisible;
      this.buttonCaption = this.isVisible ? "Hide list" : "Show list";
    },
  },
}).mount("#assignment");

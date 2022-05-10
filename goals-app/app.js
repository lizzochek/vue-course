const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Learn Vue",
      vueLink: "https://vuejs.org/guide/introduction.html",
    };
  },
  methods: {
    chooseGoal() {
      const randomNum = Math.random();
      return randomNum < 0.5 ? "Learn Vue!" : "Master Vue";
    },
  },
});

app.mount("#user-goal");

const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Learn Vue",
      courseGoalB: "Master Vue",
      vueLink: "https://vuejs.org/guide/introduction.html",
    };
  },
  methods: {
    chooseGoal() {
      const randomNum = Math.random();
      return randomNum < 0.5 ? this.courseGoalA : this.courseGoalB;
    },
  },
});

app.mount("#user-goal");

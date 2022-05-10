const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Learn Vue",
      vueLink: "https://vuejs.org/guide/introduction.html",
    };
  },
});

app.mount("#user-goal");

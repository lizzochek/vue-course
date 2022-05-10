Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  computed: {
    output() {
      switch (true) {
        case this.counter == 37:
          return this.counter;
        case this.counter < 37:
          return "Not there yet";
        case this.counter > 37:
          return "Too much!";
      }
    },
  },
  watch: {
    output() {
      const that = this;
      setTimeout(() => {
        this.counter = 0;
        alert("Counter value was reset");
      }, 5000);
    },
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
      console.log(this.counter);
    },
  },
}).mount("#assignment");

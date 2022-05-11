const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "liza",
          name: "Liza Dolhova",
          phone: "0523226586",
          email: "liza@gmail.com",
        },
        {
          id: "anna",
          name: "Anna Winter",
          phone: "0578954561",
          email: "anna@gmail.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
  <li>
    <h2>{{friend.name}}</h2>
    <button>Show Details</button>
    <ul v-if="detailsVisible">
        <li><strong>Phone:</strong> {{friend.phone}}</li>
        <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
  </li>
`,
  data() {
    return {
      detailsVisible: true,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
  },
});

app.mount("#app");

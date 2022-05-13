<template>
  <transition-group tag="ul" name="user-list">
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </transition-group>
  <div>
    <input type="text" ref="userInput" />
    <button @click="addUser()">Add user</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['Liza', 'Anna', 'Jane'],
    };
  },
  methods: {
    addUser() {
      const enteredName = this.$refs.userInput.value;
      this.users.unshift(enteredName);
      this.$refs.userInput.value = '';
    },
    removeUser(user) {
      const foundUserIndex = this.users.findIndex((usr) => usr === user);
      this.users.splice(foundUserIndex, 1);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.user-list-enter-active {
  transition: all 1s ease-out;
}

.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.user-list-leave-active {
  transition: all 1s ease-in;
  position: absolute;
}

.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.user-list-move {
  transition: transform 0.8s ease;
}
</style>

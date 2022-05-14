<template>
  <button @click="logIn">Login</button>
  <button @click="logOut">Logout</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['logIn', 'logOut']),
  },
};
</script>

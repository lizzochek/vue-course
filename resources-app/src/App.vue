<template>
  <section>
    <the-header></the-header>
    <item-list :resources="storedResources"></item-list>
  </section>
</template>

<script>
import ItemList from './components/list/ItemList.vue';
import TheHeader from './components/TheHeader.vue';

export default {
  components: { ItemList, TheHeader },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org',
        },

        {
          id: 'google',
          title: 'Google',
          description: 'You need to google!',
          link: 'https://google/com',
        },
      ],
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>

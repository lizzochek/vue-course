<template>
  <item-list :resources="storedResources"></item-list>
</template>

<script>
import ItemList from './components/ItemList.vue';

export default {
  components: { ItemList },
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

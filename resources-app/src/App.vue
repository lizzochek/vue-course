<template>
  <ul>
    <base-list-item
      v-for="resource in storedResources"
      :key="resource.id"
      :resource="resource"
    ></base-list-item>
  </ul>
</template>

<script>
export default {
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

<style></style>

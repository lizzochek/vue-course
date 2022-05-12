<template>
  <base-card>
    <base-button @click="setSelected('item-list')" :mode="resButtonMode"
      >Stored Resources</base-button
    >
    <base-button @click="setSelected('add-resource')" :mode="addButtonMode"
      >Add resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import ItemList from '../list/ItemList.vue';
import AddResource from './AddResource.vue';

export default {
  components: { AddResource, ItemList },

  data() {
    return {
      selectedTab: 'item-list',
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
  computed: {
    resButtonMode() {
      return this.selectedTab === 'item-list' ? null : 'flat';
    },
    addButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.deleteResource,
    };
  },
  methods: {
    setSelected(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title,
        description,
        link,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'item-list';
    },
    deleteResource(id) {
      const itemIndex = this.storedResources.indexOf(
        (resource) => resource.id === id
      );
      this.storedResources.splice(itemIndex, 1);
    },
  },
};
</script>

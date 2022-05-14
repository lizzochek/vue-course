<template>
  <section>FILTER</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as Coach</router-link>
    </div>
    <div v-if="hasCoaches">
      <ul v-for="coach in filteredCoaches" :key="coach.id">
        <coach-item :coach="coach"> </coach-item>
      </ul>
    </div>

    <h3 v-else>No coaches found</h3>
  </section>
</template>

<script>
import CoachItem from '../../coaches/CoachItem.vue';

export default {
  components: { CoachItem },
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/getCoaches'];
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
};
</script>

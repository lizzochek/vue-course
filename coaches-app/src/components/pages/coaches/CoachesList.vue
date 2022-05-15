<template>
  <base-dialog :show="!!error" title="An error occured">
    <p>{{ error }}</p>
  </base-dialog>
  <section>
    <coach-filter @change-filter="setFilters"></coach-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="loadCoaches(true)"
          >Refresh</base-button
        >
        <base-button v-if="!isCoach && !isLoading" link to="/register"
          >Register as Coach</base-button
        >
      </div>

      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <div v-else-if="hasCoaches">
        <ul v-for="coach in filteredCoaches" :key="coach.id">
          <coach-item :coach="coach"> </coach-item>
        </ul>
      </div>

      <h3 v-else>No coaches found</h3>
    </base-card>
  </section>
</template>

<script>
import CoachFilter from './CoachFilter.vue';
import CoachItem from './CoachItem.vue';

export default {
  components: { CoachItem, CoachFilter },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
      isLoading: false,
      error: false,
    };
  },
  computed: {
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },

    filteredCoaches() {
      return this.$store.getters['coaches/getCoaches'].filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend'))
          return true;
        if (this.activeFilters.backend && coach.areas.includes('backend'))
          return true;
        if (this.activeFilters.career && coach.areas.includes('career'))
          return true;
        else return false;
      });
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadCoaches(forceRefresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('coaches/loadCoaches', forceRefresh);
      } catch (err) {
        this.error = err.message;
      }

      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
  created() {
    this.loadCoaches();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>

<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="isError && !isLoading">An error occured</p>
      <ul v-else-if="!isLoading && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
      <p v-else>No stored experiences found</p>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  data() {
    return {
      results: [],
      isLoading: false,
      isError: false,
    };
  },
  components: {
    SurveyResult,
  },

  methods: {
    async loadExperiences() {
      this.isLoading = true;
      this.isError = false;

      try {
        const response = await fetch(
          'https://vue-http-requests-bf711-ope-west1.firebasedatabase.app/surveys.json'
        );
        if (response.ok) {
          const data = await response.json();
          const results = [];
          for (const id in data) {
            results.push({ id, name: data[id].name, rating: data[id].rating });
          }
          this.results = results;
        }
      } catch (err) {
        this.isError = true;
      }

      this.isLoading = false;
    },
    mounted() {
      this.loadExperiences();
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      error: null,
      isLoading: false,
      coaches: [
        {
          id: 'c1',
          firstName: 'Sam',
          lastName: 'Smith',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Sam and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
        {
          id: 'c2',
          firstName: 'Julie',
          lastName: 'Jones',
          areas: ['frontend', 'career'],
          description:
            'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 30,
        },
      ],
    };
  },
  mutations: {
    registerCoach(state, payload) {
      state.coaches.push(payload);
    },
    setCoaches(state, payload) {
      state.coaches = payload;
    },
    setFetchTime(state) {
      state.lastFetch = new Date().getTime();
    },
  },
  actions: {
    async registerCoach(context, data) {
      const userId = context.rootGetters.userId;

      const response = await fetch(
        `https://vue-http-requests-bf711-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`,
        {
          method: 'PUT',
          body: JSON.stringify(data),
        }
      );

      //const resData = await response.json();

      if (!response.ok) {
        //error
      }

      context.commit('registerCoach', {
        ...data,
        id: userId,
      });
    },
    async loadCoaches(context, payload) {
      if (!payload && !context.getters.shouldUpdate) return;

      this.state.isLoading = true;
      const response = await fetch(
        `https://vue-http-requests-bf711-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`
      );

      if (!response.ok) {
        this.state.error = response.message || 'Failed to fetch';
        throw new Error(this.state.error);
      }

      const resData = await response.json();
      if (resData) this.state.isLoading = false;

      const coaches = [];

      for (let value of Object.values(resData)) {
        coaches.push({ ...value, id: context.rootGetters.userId });
      }

      context.commit('setCoaches', coaches);
      context.commit('setFetchTime');
    },
  },
  getters: {
    getCoaches(state) {
      return state.coaches;
    },
    hasCoaches(state) {
      return state.coaches && state.coaches.length > 0;
    },
    isCoach(_, getters, _2, rootGetters) {
      return getters.getCoaches.some(
        (coach) => coach.id === rootGetters.userId
      );
    },
    shouldUpdate(state) {
      const lastFetch = state.lastFetch;
      if (!lastFetch) return true;

      const timeDif = (new Date().getTime() - lastFetch) / 1000;
      return timeDif > 60;
    },
  },
};

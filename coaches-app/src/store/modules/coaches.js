export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [],
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
      const token = context.rootGetters.getToken;

      const response = await fetch(
        `https://vue-http-requests-bf711-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json?auth=${token}`,
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

      const response = await fetch(
        `https://vue-http-requests-bf711-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`
      );

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message || 'Failed to fetch');
      }

      const coaches = [];

      for (let [key, value] of Object.entries(resData)) {
        coaches.push({ ...value, id: key });
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

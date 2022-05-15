export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  mutations: {
    addRequest(state, payload) {
      state.requests.push(payload);
    },
  },
  actions: {
    contactCoach(context, payload) {
      const newRequest = {
        id: new Date().toISOString(),
        ...payload,
      };
      console.log(newRequest);
      context.commit('addRequest', newRequest);
    },
  },
  getters: {
    getRequests(state, getters, rootState, rootGetters) {
      const coachId = rootGetters.userId;

      return state.requests.filter((req) => req.coachId === coachId);
    },
    hasRequests(state, getters) {
      return getters.getRequests && getters.getRequests.length > 0;
    },
  },
};

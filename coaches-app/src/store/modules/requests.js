export default {
  namespaced: true,
  state() {
    return {
      error: null,
      isLoading: false,
      requests: [],
    };
  },
  mutations: {
    addRequest(state, payload) {
      state.requests.push(payload);
    },
    setRequests(state, payload) {
      state.requests = payload;
    },
  },
  actions: {
    async contactCoach(context, payload) {
      const response = await fetch(
        `https://vue-http-requests-bf711-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`,
        {
          method: 'POST',
          body: JSON.stringify({
            email: payload.email,
            message: payload.message,
          }),
        }
      );

      if (!response.ok) {
        this.state.error = response.message || 'Failed to fetch';
        throw new Error(this.state.error);
      }

      const resData = await response.json();
      const newRequest = {
        ...payload,
        id: resData.name,
      };

      context.commit('addRequest', newRequest);
    },
    async fetchRequests(context) {
      this.state.isLoading = true;
      const coachId = context.rootGetters.userId;
      const response = await fetch(
        `https://vue-http-requests-bf711-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json`
      );

      if (!response.ok) {
        this.state.error = response.message || 'Failed to fetch';
        throw new Error(this.state.error);
      }

      const resData = await response.json();
      if (resData) this.state.isLoading = false;

      const requests = [];

      for (let [key, value] of Object.entries(resData)) {
        requests.unshift({
          id: key,
          coachId,
          ...value,
        });
      }
      context.commit('setRequests', requests);
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

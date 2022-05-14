const counterModule = {
  state() {
    return { counter: 0 };
  },
  mutations: {
    increment(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    increment(context, payload) {
      setTimeout(() => {
        context.commit('increment', payload);
      }, 2000);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(state, getters) {
      const normalizedCounter = getters.finalCounter;
      if (normalizedCounter > 100) return 100;
      if (normalizedCounter < 0) return 0;
      return normalizedCounter;
    },
  },
};

export default counterModule;

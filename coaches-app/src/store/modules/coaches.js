export default {
  namespaced: true,
  state() {
    return {
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
  },
  actions: {
    registerCoach(context, data) {
      data.id = context.rootGetters.userId;
      context.commit('registerCoach', data);
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
  },
};

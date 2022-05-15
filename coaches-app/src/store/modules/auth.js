export default {
  state() {
    return {
      userId: null,
      token: null,
      tokenExpiration: null,
    };
  },
  mutations: {
    setUser(state, payload) {
      state = { ...payload };
    },
  },
  actions: {
    // login(context, payload) {},
    async signup(context, payload) {
      const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBoVSFnqNrrquWv4zkXEdKkCB70Y1_B0AE',
        {
          method: 'POST',
          body: JSON.stringify({
            ...payload,
            returnSecureToken: true,
          }),
        }
      );
      const resData = await response.json();

      if (!response.ok) {
        throw new Error(
          resData.message || 'User with such email already exists'
        );
      }

      context.commit('setUser', {
        token: resData.idToken,
        userId: resData.localId,
        tokenExpiration: resData.expiresIn,
      });
    },
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
};

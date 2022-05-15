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
      state.userId = payload.userId;
      state.token = payload.token;
      state.tokenExpiration = payload.tokenExpiration;
    },
  },
  actions: {
    async login(context, payload) {
      const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBoVSFnqNrrquWv4zkXEdKkCB70Y1_B0AE',
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
        throw new Error(resData.message || 'Please check your data');
      }

      context.commit('setUser', {
        token: resData.idToken,
        userId: resData.localId,
        tokenExpiration: resData.expiresIn,
      });
    },
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
    getToken(state) {
      return state.token;
    },
    isAuthenticated(state) {
      return !!state.token;
    },
  },
};

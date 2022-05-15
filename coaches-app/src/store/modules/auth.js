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
      return context.dispatch('auth', {
        ...payload,
        mode: 'login',
      });
    },
    async signup(context, payload) {
      return context.dispatch('auth', {
        ...payload,
        mode: 'signup',
      });
    },
    logout(context) {
      context.commit('setUser', {
        token: null,
        userId: null,
        tokenExpiration: null,
      });
    },
    async auth(context, payload) {
      const mode = payload.mode;
      let url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBoVSFnqNrrquWv4zkXEdKkCB70Y1_B0AE';

      if (mode === 'signup')
        url =
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBoVSFnqNrrquWv4zkXEdKkCB70Y1_B0AE';

      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          ...payload,
          returnSecureToken: true,
        }),
      });
      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message || 'Something went wrong');
      }

      localStorage.setItem('token', resData.idToken);
      localStorage.setItem('userId', resData.localId);

      context.commit('setUser', {
        token: resData.idToken,
        userId: resData.localId,
        tokenExpiration: resData.expiresIn,
      });
    },
    autoLogIn(context) {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');

      if (token && userId) {
        context.commit('setUser', {
          token,
          userId,
          tokenExpiration: null,
        });
      }
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

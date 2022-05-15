let timer;

export default {
  state() {
    return {
      userId: null,
      token: null,
      didAutoLogOut: false,
    };
  },
  mutations: {
    setUser(state, payload) {
      state.userId = payload.userId;
      state.token = payload.token;
      state.didAutoLogOut = false;
    },
    setAutoLogOut(state) {
      state.didAutoLogOut = true;
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
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('tokenExpiration');

      clearTimeout(timer);

      context.commit('setUser', {
        token: null,
        userId: null,
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

      const expiresIn = +resData.expiresIn * 1000;
      const expirationDate = new Date().getTime() + expiresIn;

      localStorage.setItem('token', resData.idToken);
      localStorage.setItem('userId', resData.localId);
      localStorage.setItem('tokenExpiration', expirationDate);

      timer = setTimeout(() => context.dispatch('autoLogOut'), expiresIn);

      context.commit('setUser', {
        token: resData.idToken,
        userId: resData.localId,
      });
    },
    autoLogIn(context) {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      const tokenExpiration = localStorage.getItem('tokenExpiration');

      const expiresIn = +tokenExpiration - new Date().getTime();

      if (expiresIn < 0) {
        return;
      }

      timer = setTimeout(() => context.dispatch('autoLogOut'), expiresIn);

      if (token && userId) {
        context.commit('setUser', {
          token,
          userId,
        });
      }
    },
    autoLogOut(context) {
      context.dispatch('logout');
      context.commit('setAutoLogOut');
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
    didAutoLogOut(state) {
      return state.didAutoLogOut;
    },
  },
};

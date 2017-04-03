import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import auth from './auth';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
  },
  plugins: [
    createPersistedState({ paths: ['auth.user'] }),
  ],
});

if (module.hot) {
  module.hot.accept(['./auth'], () => {
    /* eslint-disable global-require */
    const newAuth = require('./auth').default;
    store.hotUpdate({
      modules: {
        auth: newAuth,
      },
    });
  });
}

export default store;

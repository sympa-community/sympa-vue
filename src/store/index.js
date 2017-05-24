import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import auth from './auth';
import jmap from './jmap';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    jmap,
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

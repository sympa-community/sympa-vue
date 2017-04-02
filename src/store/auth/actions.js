const fakeUser = {
  token: 'abcd',
  name: {
    first: 'Quentin',
    last: 'Gliech',
  },
  email: 'gliech@etu.unistra.fr',
};

const fakeLogin = (endpoint, username, password) =>
  new Promise((resolve, reject) => setTimeout(() => {
    if (username === 'username' && password === 'password') {
      resolve(fakeUser);
    } else {
      reject({ message: 'Invalid credentials' });
    }
  }, 500));

const fakeLogout = () =>
  new Promise(resolve => setTimeout(resolve, 500));

export async function login({ commit, rootState }, { username, password }) {
  commit('LOGIN_START');

  try {
    const user = await fakeLogin(rootState.endpoint, username, password);
    commit('LOGIN_SUCCESS', user);
  } catch (err) {
    commit('LOGIN_FAILED', err);
  }
}

export async function logout({ commit, rootState, state }) {
  commit('LOGOUT_START');

  try {
    await fakeLogout(rootState.endpoint, state.token);
    commit('LOGOUT_SUCCESS');
  } catch (err) {
    commit('LOGOUT_FAILED', err);
  }
}

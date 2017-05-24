function buildHeaders(state) {
  return new Headers({
    'Content-Type': 'application/json; charset=UTF-8',
    Accept: 'application/json',
    Authorization: state.token.access,
  });
}

async function getContinuationToken({ commit, state, username }) {
  commit('CONTINUATION_TOKEN_START');
  try {
    const res = await fetch(state.endpoint.authentication, {
      method: 'POST',
      headers: buildHeaders(state),
      body: JSON.stringify({
        username,
        clientName: 'Sympa',
        clientVersion: 'NG',
        deviceName: 'Web Interface',
      }),
    });
    const body = await res.json();
    if (res.status !== 200) {
      commit('CONTINUATION_TOKEN_FAILURE', {
        message: 'Bad request',
      });
      return;
    }
    commit('CONTINUATION_TOKEN_SUCCESS', body.continuationToken);
  } catch (e) {
    commit('CONTINUATION_TOKEN_FAILURE', {
      message: 'Unkown error while trying to get the continuation token.',
    });
  }
}

async function getAccessToken({ commit, state, password }) {
  commit('ACCESS_TOKEN_START');
  try {
    const res = await fetch(state.endpoint.authentication, {
      method: 'POST',
      headers: buildHeaders(state),
      body: JSON.stringify({
        token: state.token.continuation,
        method: 'password',
        password,
      }),
    });
    const body = await res.json();
    if (res.status === 200) {
      // @TODO: implement it!
      commit('ACCESS_TOKEN_FAILURE', {
        message: 'An other action is required to authenticate, but it is not implemented yet.',
      });
    } else if (res.status === 201) {
      commit('ACCESS_TOKEN_SUCCESS', body.accessToken);
    } else {
      commit('ACCESS_TOKEN_FAILURE', {
        message: 'Invalid creditentials',
      });
    }
  } catch (e) {
    commit('ACCESS_TOKEN_FAILURE', {
      message: 'Unkown error while trying to get the access token.',
    });
  }
}

async function getEndpoints({ commit, state }) {
  commit('GET_ENDPOINTS_START');
  try {
    const res = await fetch(state.endpoint.authentication, {
      method: 'GET',
      headers: buildHeaders(state),
    });
    const body = await res.json();
    if (res.status !== 200) {
      commit('GET_ENDPOINTS_FAILURE', {
        message: 'Unable to get endpoints...',
      });
      return;
    }
    commit('GET_ENDPOINTS_SUCCESS', body);
  } catch (e) {
    commit('GET_ENDPOINTS_FAILURE', {
      message: 'Unkown error while trying to get endpoints.',
    });
  }
}

async function getMailboxes({ commit, state }) {
  commit('GET_MAILBOXES_START');
  try {
    const res = await fetch(state.endpoint.api, {
      method: 'POST',
      headers: buildHeaders(state),
      body: JSON.stringify([
          ['getMailboxes', {}, '#0'],
      ]),
    });
    const body = await res.json();
    if (res.status !== 200) {
      commit('GET_MAILBOXES_FAILURE', {
        message: 'Unable to get mailboxes...',
      });
    }
    commit('GET_MAILBOXES_SUCCESS', body[0][1]);
  } catch (e) {
    commit('GET_MAILBOXES_FAILURE', {
      message: 'Unkown error while trying to get mailboxes.',
    });
  }
}

export async function login({ commit, state }, { endpoint, username, password }) {
  commit('SET_AUTHENTICATION_ENDPOINT', endpoint);
  await getContinuationToken({ commit, state, username });
  if (state.token.continuation !== null && state.token.continuation !== undefined) {
    await getAccessToken({ commit, state, password });
    if (state.token.access !== null && state.token.access !== undefined) {
      await getEndpoints({ commit, state });
      await getMailboxes({ commit, state });
    }
  }
}

export async function logout({ commit, state }) {
  commit('LOGOUT_START');
  await fetch(state.endpoint.authentication, {
    method: 'DELETE',
    headers: buildHeaders(state),
  });
  commit('LOGOUT_SUCCESS');
}


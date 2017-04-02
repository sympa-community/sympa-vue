export function LOGIN_START(state) {
  state.pending = true;
}

export function LOGIN_SUCCESS(state, user) {
  state.pending = false;
  state.error = null;
  state.user = user;
}

export function LOGIN_FAILED(state, err) {
  state.pending = false;
  state.error = err;
  state.user = null;
}

export function LOGOUT_START(state) {
  state.pending = true;
}

export function LOGOUT_SUCCESS(state) {
  state.pending = false;
  state.error = null;
  state.user = null;
}

export function LOGOUT_FAILED(state, err) {
  state.pending = false;
  state.error = err;
}

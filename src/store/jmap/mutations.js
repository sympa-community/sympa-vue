export function SET_AUTHENTICATION_ENDPOINT(state, endpoint) {
  state.endpoint.authentication = endpoint;
}

export function CONTINUATION_TOKEN_START(state) {
  state.pending = true;
}

export function CONTINUATION_TOKEN_FAILURE(state, err) {
  state.pending = false;
  state.error = err;
  state.token.continuation = null;
  state.token.access = null;
}

export function CONTINUATION_TOKEN_SUCCESS(state, token) {
  state.pending = false;
  state.error = null;
  state.token.continuation = token;
  state.token.access = null;
}

export function ACCESS_TOKEN_START(state) {
  state.pending = true;
}

export function ACCESS_TOKEN_FAILURE(state, err) {
  state.pending = false;
  state.error = err;
  state.token.continuation = null;
  state.token.access = null;
}

export function ACCESS_TOKEN_SUCCESS(state, token) {
  state.pending = false;
  state.error = null;
  state.token.access = token;
}

export function GET_ENDPOINTS_START(state) {
  state.pending = true;
}

export function GET_ENDPOINTS_FAILURE(state, err) {
  state.pending = false;
  state.error = err;
}

export function GET_ENDPOINTS_SUCCESS(state, { api, eventSource, upload, download }) {
  state.pending = false;
  state.error = null;
  state.endpoint.api = `${new URL(api, state.endpoint.authentication)}`;
  state.endpoint.eventSource = `${new URL(eventSource, state.endpoint.authentication)}`;
  state.endpoint.upload = `${new URL(upload, state.endpoint.authentication)}`;
  state.endpoint.download = `${new URL(download, state.endpoint.authentication)}`;
}

export function LOGOUT_START(state) {
  state.pending = true;
}

export function LOGOUT_SUCCESS(state) {
  state.pending = false;
  state.error = null;
  state.token.continuation = null;
  state.token.access = null;
  state.mailboxes = {
    list: [],
  };
}

export function GET_MAILBOXES_START(state) {
  state.pending = true;
}

export function GET_MAILBOXES_FAILURE(state, err) {
  state.pending = false;
  state.error = err;
}

export function GET_MAILBOXES_SUCCESS(state, mailboxes) {
  state.pending = false;
  state.mailboxes = mailboxes;
}


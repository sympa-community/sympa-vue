export const errored = state => state.error !== null;
export const errorMessage = state => state.error && state.error.message;
export const pending = state => state.pending;
export const logged = state => state.token.access !== null && state.token.access !== undefined;
export const mailboxes = state => state.mailboxes;


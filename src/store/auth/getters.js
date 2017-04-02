import gravatar from 'gravatar';

export const errored = state => state.error !== null;
export const errorMessage = state => state.error && state.error.message;
export const pending = state => state.pending;
export const logged = state => state.user !== null;
export const fullname = state => (state.user ? `${state.user.name.first} ${state.user.name.last}` : '');
export const email = state => state.user && state.user.email;
export const picture = state => state.user && gravatar.url(state.user.email, { s: 128 });

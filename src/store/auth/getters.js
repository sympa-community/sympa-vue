export const logged = state => state.user !== null;

export const fullname = state => (state.user ? `${state.user.name.first} ${state.user.name.last}` : '');

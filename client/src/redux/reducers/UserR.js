import { CURRENT_USER_LOGIN } from '../actions/actions';

const userInitialState = {
  currentUser: {
    user_email: 'Cargando...',
    first_name: 'Cargando...',
    last_name: 'Cargando...',
    country: 'Cargando...',
    city: 'Cargando...',
    street: 'Cargando...',
    phone: 'Cargando...',
    is_admin: false
  }
};

export const userR = (state = userInitialState, action) => {
  const { type, payload } = action;
  if (type === CURRENT_USER_LOGIN) {
    return {
      ...state,
      currentUser: {
        ...state.currentUser,
        user_email: payload.user_email,
        first_name: payload.first_name,
        last_name: payload.last_name,
        phone: payload.phone,
        country: payload.country,
        city: payload.city,
        street: payload.street,
        is_admin: payload.is_admin
      }
    };
  }
  return state;
};

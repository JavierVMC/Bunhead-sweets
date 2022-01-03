import { USER_HAS_LOGGED_IN } from './actions';
import { CURRENT_USER_LOGIN } from './actions';
import { CATEGORY_FILTER_SELECTED } from './actions';
import { SORTER_FILTER_SELECTED } from './actions';
import { CATEGORY_FILTER_UNSELECTED } from './actions';
import { SORTER_FILTER_UNSELECTED } from './actions';
import { ADMIN } from './actions';

const initialState = {
  userIsLogin: false,
  admin: false,
  currentUser: {
    firstname: 'Cargando...',
    lastname: 'Cargando...',
    country: 'Cargando...',
    city: 'Cargando...',
    street: 'Cargando...',
    phone: 'Cargando...',
    email: 'Cargando...'
  },
  categoryFilters: [],
  sorterFilters: []
};

export const appReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_HAS_LOGGED_IN: {
      return {
        ...state,
        userIsLogin: payload
      };
    }
    case ADMIN: {
      return {
        ...state,
        admin: payload
      };
    }
    case CURRENT_USER_LOGIN: {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          firstname: payload.firstname,
          lastname: payload.lastname,
          address: payload.address,
          email: payload.email
        }
      };
    }
    case CATEGORY_FILTER_SELECTED: {
      return {
        ...state,
        categoryFilters: [...state.categoryFilters, payload]
      };
    }
    case SORTER_FILTER_SELECTED: {
      return {
        ...state,
        sorterFilters: [...state.sorterFilters, payload]
      };
    }
    case CATEGORY_FILTER_UNSELECTED: {
      return {
        ...state,
        categoryFilters: state.categoryFilters.filter(
          (filter) => filter !== payload
        )
      };
    }
    case SORTER_FILTER_UNSELECTED: {
      return {
        ...state,
        sorterFilters: state.sorterFilters.filter(
          (filter) => filter !== payload
        )
      };
    }
    default: {
      return state;
    }
  }
};

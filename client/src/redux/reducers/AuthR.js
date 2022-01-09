import { USER_HAS_LOGGED_IN } from '../actions/actions';

const authInitialState = {
  userIsLogin: false
};

export const authR = (state = authInitialState, action) => {
  if (action.type === USER_HAS_LOGGED_IN) {
    return {
      userIsLogin: action.payload
    };
  }
  return state;
};

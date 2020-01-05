import { USER_SIGN_UP } from '../Constants/actionCreators';

const INIT_STATE = {
  user: {}
};

function authReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case USER_SIGN_UP:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
export default authReducer;

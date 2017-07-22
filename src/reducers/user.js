import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_ERROR } from "constants/action-types";

const initialState = {
  signedIn: false,
  uid: 'uid',
  name: 'name',
  balance: 0
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return {
        ...state,
        signedIn: false
      };
    case USER_SIGNIN_SUCCESS:
      return {
        ...state,
        signedIn: true,
        uid: action.data.data.uid,
        name: action.data.data.name,
        balance: action.data.data.price
      };
    case USER_SIGNIN_ERROR:
      return {
        ...state,
        signedIn: false
      };
    default:
      return state;
  }
}

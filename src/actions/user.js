import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_ERROR } from "constants/action-types";

function signInRequset(params) {
  return {
    type: USER_SIGNIN_REQUEST,
    params
  };
}

function signInSuccess(data) {
  return {
    type: USER_SIGNIN_SUCCESS,
    data
  };
}

function signInError(data) {
  return {
    type: USER_SIGNIN_ERROR,
    data
  }
}

export function signInRequest(params) {
  return dispatch => {
    dispatch(signInRequset(params));
    return fetch(`/interface/v1/user/login.php`, {
      method: "post",
      body: JSON.stringify(params)
    })
      .then(res => res.json())
      .then(json => dispatch(signInSuccess(json)))
      .catch(json => dispatch(signInError(json)));
  }
}



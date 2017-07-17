import { APP_LOAD, API_REQUEST, API_RESPONSE_RECEIVED } from 'constants/action-types';

export const loadApp = () => {
  return {
    type: APP_LOAD
  };
};

function requestAPI(params) {
  return {
    type: API_REQUEST,
    params
  };
}

function receiveResponse(json) {
  console.log(json);
  return {
    type: API_RESPONSE_RECEIVED,
    content: JSON.stringify(json)
  };
}

export function fetchApi(params) {
  return dispatch => {
    dispatch(requestAPI(params));
    return fetch(`/api/content`)
      .then(response => response.json())
      .then(json => dispatch(receiveResponse(json)));
  };
}

export default { loadApp };

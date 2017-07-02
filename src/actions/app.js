import { APP_LOAD, API_REQUEST, API_RESPONSE_RECEIVED, STREAM_URL_REQUEST, STREAM_URL_RESPONSE, STREAM_URL_ERROR } from 'constants/action-types';

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

function streamUrlRequest(params) {
  return {
    type: STREAM_URL_REQUEST,
    params
  };
}

function streamUrlResponse(json) {
  return {
    type: STREAM_URL_RESPONSE,
      ...json
  };
}

function streamUrlError(error) {
  return {
    type: STREAM_URL_ERROR,
      ...error
  };
}

export function fetchStreamUrl(params) {
  return dispatch => {
    dispatch(streamUrlRequest(params));
    // TODO fix this with param from url
    return fetch(`/api/streamUrl/6`)
      .then(response => response.json())
      .then(json => dispatch(streamUrlResponse(json)))
      .catch(error => dispatch(streamUrlError(error)));
  };
}


export default { loadApp };

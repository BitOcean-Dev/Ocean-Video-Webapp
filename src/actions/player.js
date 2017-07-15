import { STREAM_URL_REQUEST, STREAM_URL_RESPONSE, STREAM_URL_ERROR } from 'constants/action-types';

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

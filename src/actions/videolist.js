import { VIDEO_LIST_REQUEST, VIDEO_LIST_RESPONSE, VIDEO_LIST_ERROR } from "constants/action-types";

function videoListRequest(params) {
  return {
    type: VIDEO_LIST_REQUEST,
    ...params
  };
}

function videoListResponse(json) {
  return {
    type: VIDEO_LIST_RESPONSE,
    status: 'success',
    data: json
  };
}

function videoListError(error) {
  return {
    type: VIDEO_LIST_ERROR,
    status: 'error',
    reason: error
  };
}

export function fetchVideoList(params) {
  return dispatch => {
    dispatch(videoListRequest(params));
    // TODO fix this with param from url
    return fetch(`/api/v1/video/video_list/`)
      .then(response => response.json())
      .then(json => dispatch(videoListResponse(json)))
      .catch(error => dispatch(videoListError(error)));
  };
}

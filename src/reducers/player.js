import { STREAM_URL_REQUEST, STREAM_URL_RESPONSE }  from 'constants/action-types';

const initialState = {
  status: 'initial',
  url: ''
};

export default function player(state=initialState, action) {
  switch (action.type) {
    case STREAM_URL_REQUEST:
      return { ...state, status: 'loading' };
    case STREAM_URL_RESPONSE:
      return {
        ...state,
        status: 'loaded',
        url: action.url
      };
    default:
      return state;
  };
}



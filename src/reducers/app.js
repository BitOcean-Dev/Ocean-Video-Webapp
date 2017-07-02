import { APP_LOAD, API_RESPONSE_RECEIVED } from 'constants/action-types';
import { combineReducers } from 'redux';

const initialState = {
  loaded: false,
  content: 'not loaded from API'
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case APP_LOAD:
      return { ...state, loaded: true };
    case API_RESPONSE_RECEIVED:
      return {
        ...state,
        content: action.content
      };
    default:
      return state;
  };
};

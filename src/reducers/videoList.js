import { VIDEO_LIST_REQUEST, VIDEO_LIST_RESPONSE }  from 'constants/action-types';
import React from 'react';

const initialState = {
    status: 'initial',
    loaded: false,
    data: []
};

export default function videoList(state=initialState, action) {
    switch (action.type) {
        case VIDEO_LIST_REQUEST:
            return { ...state, loaded: false, status: 'loading' };
        case VIDEO_LIST_RESPONSE:
            return {
                ...state,
                loaded: true,
                status: action.status,
                data: action.data
            };
        default:
            return state;
    };
}

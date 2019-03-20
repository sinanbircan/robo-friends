import {REQUEST_ERROR, REQUEST_PENDING, REQUEST_SUCCESS, SET_SEARCH_FIELD} from "./constants";

const initialStateSearch = {
    searchInput: ""
};

export const searchReducer = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case SET_SEARCH_FIELD:
            return {...state, searchInput: action.payload};
        default:
            return state;
    }
};

const initialStateRequest = {
    isPending: false,
    robots: [],
    err: ""
};

export const requestRobotsReducer = (state = initialStateRequest, action = {}) => {
    switch (action.type) {
        case REQUEST_PENDING:
            return {...state, isPending: true};
        case REQUEST_SUCCESS:
            return {...state, robots: action.payload, isPending: false};
        case REQUEST_ERROR:
            return {...state, err: action.payload, isPending: false};
        default:
            return state;
    }
};


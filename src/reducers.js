import {SET_SEARCH_FIELD} from "./constants";

const initialState = {
    searchInput: ""
};

const reducer = (state, action) => {
    switch (action.type) {
        case SET_SEARCH_FIELD:
            return {...state, searchInput: action.payload};
        default:
            return state;
    }
};
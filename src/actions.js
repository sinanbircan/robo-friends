import {SET_SEARCH_FIELD} from "./constants";

const setSearchField = (text) => ({
    type: SET_SEARCH_FIELD,
    payload: text
});
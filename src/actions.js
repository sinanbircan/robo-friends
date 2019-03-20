import {REQUEST_ERROR, REQUEST_PENDING, REQUEST_SUCCESS, SET_SEARCH_FIELD} from "./constants";

export const setSearchField = (text) => ({
    type: SET_SEARCH_FIELD,
    payload: text
});

export const requestRobots = () => (dispatch) => {
    dispatch({type: REQUEST_PENDING});
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => dispatch({type: REQUEST_SUCCESS, payload: data}))
        .catch(err => dispatch({type: REQUEST_ERROR, payload: err}))
};
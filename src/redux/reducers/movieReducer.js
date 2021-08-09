import * as types from '../actions/actionTypes';

const initialState = {
    movies: [],
    loading: false,
    error: false
}

export default function movieReducer(state = initialState.movies, action) {
    switch (action.type) {
        case types.LOAD_MOVIES_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case types.LOAD_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.movies
            };
        case types.LOAD_MOVIES_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message
            };
        default:
            return state;
    }
}
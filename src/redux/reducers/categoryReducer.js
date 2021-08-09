import * as types from '../actions/actionTypes';

const initialState = {
    categories: [],
    loading: false,
    error: null
}

export default function categoryReducer(state = initialState.categories, action) {
    switch (action.type) {
        case types.LOAD_CATEGORIES_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case types.LOAD_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.categories
            };
        case types.LOAD_CATEGORIES_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message
            };
        default:
            return state;
    }
}
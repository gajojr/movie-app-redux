import * as types from './actionTypes';

export function getMovies() {
    return { type: types.LOAD_MOVIES_REQUESTED }
}
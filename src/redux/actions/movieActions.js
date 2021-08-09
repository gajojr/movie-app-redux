import * as types from './actionTypes';

export function getMovies(movies) {
    return { type: types.LOAD_MOVIES_REQUESTED, movies }
}
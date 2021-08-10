import * as types from './actionTypes';

export function getMovies() {
    return { type: types.LOAD_MOVIES_REQUESTED }
}

export function getMovie(movieId) {
    return {
        type: types.LOAD_MOVIE_REQUESTED,
        movieId
    }
}
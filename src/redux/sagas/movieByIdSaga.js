import * as actionTypes from '../actions/actionTypes';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

const apiUrl = 'https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/movies';

async function getApi(movieId) {
    try {
        const response = await axios.get(`${apiUrl}/${movieId}`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

function* fetchMovieById(action) {
    try {
        console.log('usao')
        console.log(action);
        const movie = yield call(getApi, action.movieId)
        yield put({ type: actionTypes.LOAD_MOVIE_SUCCESS, movie })
    } catch (err) {
        console.log(err);
        yield put({ type: actionTypes.LOAD_MOVIE_FAILED, message: err.message });
    }
}

function* movieByIdSaga() {
    yield takeEvery(actionTypes.LOAD_MOVIE_REQUESTED, fetchMovieById);
}

export default movieByIdSaga;
import * as actionTypes from '../actions/actionTypes';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

const apiUrl = 'https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/movies';

async function getApi() {
    try {
        const response = await axios.get(apiUrl);
        console.log(response.data);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

function* fetchMovies() {
    try {
        const movies = yield call(getApi);
        yield put({ type: actionTypes.LOAD_MOVIES_SUCCESS, movies })
    } catch (err) {
        console.log(err);
        yield put({ type: actionTypes.LOAD_MOVIES_FAILED, message: err.message });
    }
}

function* movieSaga() {
    yield takeEvery(actionTypes.LOAD_MOVIES_REQUESTED, fetchMovies);
}

export default movieSaga;
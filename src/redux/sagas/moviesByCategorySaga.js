import * as actionTypes from '../actions/actionTypes';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

const apiUrl = 'https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/movies';

async function getApi(categoryId) {
    try {
        if (categoryId === 'all') {
            const response = await axios.get(apiUrl);

            return response.data;
        }

        const response = await axios.get(`${apiUrl}?categoryId=${categoryId}`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

function* fetchMoviesByCategory(action) {
    try {
        const movies = yield call(getApi, action.category)
        yield put({ type: actionTypes.LOAD_MOVIES_SUCCESS, movies })
    } catch (err) {
        console.log(err);
        yield put({ type: actionTypes.LOAD_MOVIES_FAILED, message: err.message });
    }
}

function* movieByCategorySaga() {
    yield takeEvery(actionTypes.SELECT_MOVIE_CATEGORY, fetchMoviesByCategory);
}

export default movieByCategorySaga;
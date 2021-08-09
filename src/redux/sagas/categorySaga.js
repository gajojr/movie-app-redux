import * as actionTypes from '../actions/actionTypes';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

const apiUrl = 'https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/categories';

async function getApi() {
    try {
        const response = await axios.get(apiUrl);
        console.log(response.data);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

function* fetchCategories() {
    try {
        const categories = yield call(getApi);
        yield put({ type: actionTypes.LOAD_CATEGORIES_SUCCESS, categories })
    } catch (err) {
        console.log(err);
        yield put({ type: actionTypes.LOAD_CATEGORIES_FAILED, message: err.message });
    }
}

function* categorySaga() {
    yield takeEvery(actionTypes.LOAD_CATEGORIES_REQUESTED, fetchCategories);
}

export default categorySaga;
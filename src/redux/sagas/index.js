import { all } from '@redux-saga/core/effects';
import categorySaga from './categorySaga';
import movieSaga from './movieSaga';

export default function* rootSaga() {
    yield all([
        categorySaga(),
        movieSaga()
    ]);
}
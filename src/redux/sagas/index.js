import { all } from '@redux-saga/core/effects';
import categorySaga from './categorySaga';
import movieSaga from './movieSaga';
import moviesByCategorySaga from './moviesByCategorySaga';

export default function* rootSaga() {
    yield all([
        categorySaga(),
        movieSaga(),
        moviesByCategorySaga()
    ]);
}
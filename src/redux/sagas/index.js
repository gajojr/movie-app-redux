import { all } from '@redux-saga/core/effects';
import categorySaga from './categorySaga';
import movieSaga from './movieSaga';
import moviesByCategorySaga from './moviesByCategorySaga';
import movieByIdSaga from './movieByIdSaga';

export default function* rootSaga() {
    yield all([
        categorySaga(),
        movieSaga(),
        moviesByCategorySaga(),
        movieByIdSaga()
    ]);
}
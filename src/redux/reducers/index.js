import { combineReducers } from 'redux';
import categories from './categoryReducer';
import movies from './movieReducer';

const rootReducer = combineReducers({
    categories,
    movies
});

export default rootReducer;
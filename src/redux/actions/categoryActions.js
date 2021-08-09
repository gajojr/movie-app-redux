import * as types from './actionTypes';

export function getCategories(categories) {
    return { type: types.LOAD_CATEGORIES_REQUESTED, categories }
}
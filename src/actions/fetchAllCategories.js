import {FETCH_ALL_CATEGORIES} from './types';
import {PARTS_OF_SPEECH_CATEGORY_LIST} from '../category/category-list-for-exercises';

export function setAllCategories(categoryList) {
    return {type: FETCH_ALL_CATEGORIES, categoryList}
}

export function fetchAllCategories() {
    return dispatch => {
        dispatch(setAllCategories(PARTS_OF_SPEECH_CATEGORY_LIST))
    }

}
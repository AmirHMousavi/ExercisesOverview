import {FETCH_ALL_CATEGORIES} from '../actions/types';
import _ from 'lodash';

export default function categories(state = {}, action) {
    switch (action.type) {
        case FETCH_ALL_CATEGORIES:
            const categoryList = action.categoryList;
            return {
                ...state,
                ...categoryList
            };
        default:
            return state;
    }
}

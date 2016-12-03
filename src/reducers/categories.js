import {GET_CATEGORIES} from '../actions/types';
import _ from 'lodash';

export default function categories(state = {}, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            const categoryList = action.categoryList;
            return {
                ...state,
                ...categoryList
            };
            /*      case FETCH_EXERCISE:
        return {...sate, [action.exercises.id]:action.exercises};
        case UPDATE_EXERCISE:
        return {...state,[action.exercises.id]:action.exercises};  */
        default:
            return state;
    }
}
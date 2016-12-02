import {FETCH_CATEGORIES} from '../actions/types';
import _ from 'lodash';

export default function categories(state={}, action){
    switch(action.type){
        case FETCH_CATEGORIES:
        const categories=_.mapKeys(action.categories,'id')
        return {...state,...categories};
        default:return state;
    }
}
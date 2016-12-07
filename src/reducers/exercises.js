import {FETCH_ALL_EXERCISES, DELETE_EXERCISE} from '../actions/types';
import _ from 'lodash';


export default function exercises(state = {}, action) {
    switch (action.type) {
        case FETCH_ALL_EXERCISES:
            const exercises = _.mapKeys(action.exercises, 'id');
            return {...state,...exercises};
        case DELETE_EXERCISE:
            return _.omit(state, action.exercises.id);
        default:
            return state;
    }
}

 /*     case FETCH_EXERCISE:
        return {...sate, [action.exercises.id]:action.exercises};
        case UPDATE_EXERCISE:
        return {...state,[action.exercises.id]:action.exercises};  */
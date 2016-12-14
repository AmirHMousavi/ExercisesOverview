import {FETCH_ALL_EXERCISES, DELETE_EXERCISE} from '../actions/types';
import _ from 'lodash';

export default function exercises(state = {}, action) {
    switch (action.type) {
        case FETCH_ALL_EXERCISES:
            const exercises = _.mapKeys(action.exercises, 'id');
            return {
                ...state,
                ...exercises
            };
        case DELETE_EXERCISE:
            return _.omit(state, action.exercises.id);
        default:
            return state;
    }
}

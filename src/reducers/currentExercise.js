import {FETCH_ONE_EXERCISE,DISMISS_CURRENT_EXERCISE} from '../actions/types';
import _ from 'lodash';


export default function currentExercise(state = {}, action) {
    switch (action.type) {
        case FETCH_ONE_EXERCISE:
            const currentExercise = action.currentExercise;
            return {...state,...currentExercise};
        case DISMISS_CURRENT_EXERCISE:
            return _.omit(...state,null);
        default:
            return state;
    }
}
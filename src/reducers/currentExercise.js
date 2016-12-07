import {FETCH_ONE_EXERCISE} from '../actions/types';


export default function currentExercise(state = {}, action) {
    switch (action.type) {
        case FETCH_ONE_EXERCISE:
            const currentExercise = action.currentExercise;
            return {...state,...currentExercise};
        default:
            return state;
    }
}
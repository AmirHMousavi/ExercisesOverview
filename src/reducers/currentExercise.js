import {FETCH_ONE_EXERCISE, DISMISS_CURRENT_EXERCISE,CURRENT_CATEGORY_UPDATED, CURRENT_SENTENCE_UPDATED, CURRENT_WORD_INDEX_UPDATED} from '../actions/types';
import _ from 'lodash';

export default function currentExercise(state = {}, action) {
    switch (action.type) {
        case FETCH_ONE_EXERCISE:
            const currentExercise = action.currentExercise;
            return {
                ...currentExercise
            };
        case DISMISS_CURRENT_EXERCISE:
            return {};
        case CURRENT_CATEGORY_UPDATED:
            const category=action.category
            return{...state,...category}
        case CURRENT_SENTENCE_UPDATED:
            const sentence=action.sentence
            return{...state,...sentence}
        case CURRENT_WORD_INDEX_UPDATED:
            const selectedWordIndex=action.selectedWordIndex
            return{...state,...selectedWordIndex}
        default:
            return state;
    }
}
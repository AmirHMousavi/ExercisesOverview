import {SENTENCE_PROVIDED, DISMISS_PROVIDED_SENTENCE} from '../actions/types';

export default function providedSentence(state = {}, action) {
    switch (action.type) {
        case SENTENCE_PROVIDED:
            const sentence = action.sentence
            return {...state,
               sentence
            };
        case DISMISS_PROVIDED_SENTENCE:
            return {};
        default:
            return state;
    }
}
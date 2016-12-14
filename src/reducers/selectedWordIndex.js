import {WORD_INDEX_SELECTED, DISMISS_SELECTED_WORD_INDEX} from '../actions/types';

export default function selectedWordIndex(state = {}, action) {
    switch (action.type) {
        case WORD_INDEX_SELECTED:
            const selectedWordIndex = action.wordIndex
            return {selectedWordIndex};
        case DISMISS_SELECTED_WORD_INDEX:
            return {};
        default:
            return state;
    }
}
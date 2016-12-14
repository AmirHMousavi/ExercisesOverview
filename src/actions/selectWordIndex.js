import {WORD_INDEX_SELECTED, DISMISS_SELECTED_WORD_INDEX} from './types';

export function setSelectedWordIndex(wordIndex) {
    return {type: WORD_INDEX_SELECTED, wordIndex}
    
}
export function dismiss() {
    return {type: DISMISS_SELECTED_WORD_INDEX}
}

export function selectWordIndex(wordIndex) {
    return dispatch => {
        dispatch(setSelectedWordIndex(wordIndex))
    }
}
export function dismissSelectedWordIndex() {
    return dispatch => {
        dispatch(dismiss())
    }
}
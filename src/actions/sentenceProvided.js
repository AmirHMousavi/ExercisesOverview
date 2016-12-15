import {SENTENCE_PROVIDED,DISMISS_PROVIDED_SENTENCE} from './types';

export function setProvidedSentence(sentence) {
    return {type: SENTENCE_PROVIDED, sentence}
    
}
export function dismiss() {
    return {type: DISMISS_PROVIDED_SENTENCE}
}

export function sentenceProvided(sentence) {
    return dispatch => {
        dispatch(setProvidedSentence(sentence))
    }
}
export function dismissProvidedSentence() {
    return dispatch => {
        dispatch(dismiss())
    }
}
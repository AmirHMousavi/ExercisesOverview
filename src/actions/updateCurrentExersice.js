import axios from 'axios';
import {CURRENT_CATEGORY_UPDATED, CURRENT_SENTENCE_UPDATED, CURRENT_WORD_INDEX_UPDATED} from './types';
import {divideExercisePartFrom,divideSolutionPartFrom} from '../assets/exercisePartsDivider';

export function updateCurrentSentence(sentence) {
    return dispatch => {
        dispatch(currentSentenceUpdated(sentence))
    }
}
export function updateCurrentWordIndex(index) {
    return dispatch => {
        dispatch(currentWordIndexUpdated(index))
    }
}
export function updateCurrentCategory(category) {
    return dispatch => {
        dispatch(currentCategoryUpdated(category))
    }
}

export function updateCurrentExercise(currentExercise){
    let exercisePart=divideExercisePartFrom(currentExercise);
    let solutionPart=divideSolutionPartFrom(currentExercise);
    return dispatch=>{axios.put(`http://localhost:8080/exercises/${currentExercise.id}`,exercisePart)
    .then(res=>{
    })
        dispatch()
    }
}

export function currentCategoryUpdated(category) {return{type:CURRENT_CATEGORY_UPDATED,category}}
export function currentSentenceUpdated(sentence) {return{type:CURRENT_SENTENCE_UPDATED,sentence}}
export function currentWordIndexUpdated(index) {return{type:CURRENT_WORD_INDEX_UPDATED,index}}
import axios from 'axios';
import {FETCH_ONE_EXERCISE, DISMISS_CURRENT_EXERCISE, DELETE_EXERCISE} from './types';

export function fetchOneExercise(id) {
    return dispatch => {
        axios
            .get(`/exercises/${id}`)
            .then(res => {
                dispatch(setCurrentExercises(res.data))
            });
    }
}
export function dismissCurrentExercise() {
    return dispatch => {
        dispatch(dismiss())
    }
}

export function deleteOneExercise(id) {
    return dispatch => {
        return axios
            .delete(`/exercises/${id}`)
            .then(res => {
                dispatch(deleteExercise(res.data))
            })
    }
}
export function setCurrentExercises(currentExercise) {
    return {type: FETCH_ONE_EXERCISE, currentExercise}
}
export function dismiss() {
    return {type: DISMISS_CURRENT_EXERCISE}
}
export function deleteExercise(exercises) {
    return {type: DELETE_EXERCISE, exercises}
}
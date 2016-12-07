import axios from 'axios';
import {FETCH_ONE_EXERCISE} from './types';

export function setCurrentExercises(currentExercise){
    return{
        type:FETCH_ONE_EXERCISE,
        currentExercise
    }
}

export function fetchOneExercise(id){
    return dispatch=>{
        axios.get(`/exercises/${id}`).then(res => {
        dispatch(setCurrentExercises(res.data))
      });
    }
}
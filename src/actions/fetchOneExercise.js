import axios from 'axios';
import {FETCH_ONE_EXERCISE,DISMISS_CURRENT_EXERCISE} from './types';

export function setCurrentExercises(currentExercise){
    return{
        type:FETCH_ONE_EXERCISE,
        currentExercise
    }
}
export function dismiss(){
    return{
        type:DISMISS_CURRENT_EXERCISE,
        editeMode:false
    }
}

export function fetchOneExercise(id){
    return dispatch=>{
        axios.get(`/exercises/${id}`).then(res => {
        dispatch(setCurrentExercises(res.data))
      });
    }
}
export function dismissCurrentExercise(){
    return dispatch=>{
        dispatch(dismiss())
    }

}
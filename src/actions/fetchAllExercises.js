import axios from 'axios';
import {FETCH_ALL_EXERCISES} from './types';

export function setAllExercises(exercises){
    return{
        type:FETCH_ALL_EXERCISES,
        exercises
    }
}

export function fetchAllExercises(){
    return dispatch=>{
        axios.get('/exercises').then(res => {
        dispatch(setAllExercises(res.data))
      });
    }
}
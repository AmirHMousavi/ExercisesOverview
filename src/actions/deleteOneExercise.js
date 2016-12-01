import axios from 'axios';
import {DELETE_EXERCISE} from './types';

export function deleteExercise(exercises){
    return{
        type:DELETE_EXERCISE,
        exercises
    }
}

export function deleteOneExercise(id){
 return dispatch=>{
     console.log('the id to be deleted', id)
     return axios.delete(`/exercises/${id}`).then(res=>{
         dispatch(deleteExercise(res.data))
     })
 }
}
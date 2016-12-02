import axios from 'axios';
import {FETCH_CATEGORIES} from './types';

export function setAllSolutionGroups(categories){
    return{
        type:FETCH_CATEGORIES,
        categories
    }
}

export function fetchAllSolutionGroups(){
    return dispatch=>{
        axios.get("/solution-groups").then((res)=>{
            dispatch(setAllSolutionGroups(res.data))
        });
    }
}
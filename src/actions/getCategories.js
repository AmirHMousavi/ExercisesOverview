import {GET_CATEGORIES} from './types';
import {PARTS_OF_SPEECH_CATEGORY_LIST} from '../category/category-list-for-exercises';

export function setAllCategories(categoryList){
    return{
        type:GET_CATEGORIES,
        categoryList
    }
}

export function getCategories(){
    return dispatch=>{
        dispatch(setAllCategories(PARTS_OF_SPEECH_CATEGORY_LIST.categories))
    }

}
import {SET_EDITE_MODE,SET_VALIDITY} from './types';

export function setEditeMode(editeMode) {
    return dispatch => {
        dispatch({type:SET_EDITE_MODE,editeMode})
    }
}
export function setValidity(validity) {
    return dispatch => {
        dispatch({type:SET_VALIDITY,validity})
    }
}
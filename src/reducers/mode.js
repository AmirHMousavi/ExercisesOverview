import {SET_EDITE_MODE,SET_VALIDITY} from '../actions/types';

export default function mode(state={},action){
    switch(action.type){
        case SET_EDITE_MODE: let editeMode=action.editeMode; return{...state,editeMode}
        case SET_VALIDITY: let validity=action.validity; return{...state,validity}
        default: return state
    }
}
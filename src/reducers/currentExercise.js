import * as types from '../actions/types';
import _ from 'lodash';
import update from 'immutability-helper';

export default function currentExercise(state = {}, action) {
    switch (action.type) {
        case types.FETCH_ONE_EXERCISE:
            const currentExercise = action.currentExercise;
            return {
                ...currentExercise
            };
        case types.DISMISS_CURRENT_EXERCISE:
            return {};
        case types.CURRENT_CATEGORY_UPDATED:
            const color = action.category.color
            const value = action.category.value
            /*return{...state,value:{...state.solutionGroups[0].category.value}}*/
            return update(state, {
                solutionGroups: {
                    0: {
                        category: {
                            value: {
                                $set: value
                            },
                            color: {
                                $set: color
                            }
                        }
                    }
                }
            })
        case types.CURRENT_SENTENCE_UPDATED:
            const sentence = action.sentence
            return {
                ...state,
                ...sentence
            }
        case types.CURRENT_WORD_INDEX_UPDATED:
            const index = action.index
            return update(state,{
                solutionGroups:{
                    0:{
                        groupParts:{
                            0:{
                                selectedWordIndex:{
                                    $set: index
                                }
                            }
                        }
                    }
                }
            })
            
        default:
            return state;
    }
}
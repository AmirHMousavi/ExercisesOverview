import * as types from '../actions/types';
import _ from 'lodash';
import update from 'immutability-helper';

let initialState={
        id: '',
    question: 'Bestäm det markerade ord.',
    sentence: '',
    exerciseType: 'PART_OF_SPEECH',
    rightAnswersNumber: 0,
    wrongAnswersNumber: 0,
    solutionGroups: [
      {
        id:'',
        category: {
          id: '',
          value: '',
          color: ''
        },
        groupParts: [
          {
            id: '',
            selectedWordIndex: ''
          }
        ]
      }
    ]
}

export default function currentExercise(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_ONE_EXERCISE:
            const currentExercise = action.currentExercise;
            return {...state,...currentExercise};
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
            return update(state,{
                sentence:{
                    $set:sentence
                }
            })
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
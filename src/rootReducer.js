import {combineReducers} from 'redux';
import exercises from './reducers/exercises';
import categories from './reducers/categories';
import currentExercise from './reducers/currentExercise';

export default combineReducers({exercises,categories,currentExercise});
import {combineReducers} from 'redux';
import exercises from './reducers/exercises';
import categories from './reducers/categories';
import currentExercise from './reducers/currentExercise';
import selectedCategory from './reducers/selectedCategory';
import selectedWordIndex from './reducers/selectedWordIndex';
import providedSentence from './reducers/providedSentence';

export default combineReducers({exercises, categories, currentExercise, selectedCategory, selectedWordIndex,providedSentence});
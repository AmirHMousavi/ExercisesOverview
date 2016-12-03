import {combineReducers} from 'redux';
import exercises from './reducers/exercises';
import categories from './reducers/categories';

export default combineReducers({exercises,categories});
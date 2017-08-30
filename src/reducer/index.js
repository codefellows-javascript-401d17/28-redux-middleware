import {combineReducers} from 'redux';
import expenseReducer from './expense.js';
import categoryReducer from './category.js';

//exports a single function that handles every type of action
export default combineReducers({
  expense: expenseReducer,
  categories: categoryReducer
})
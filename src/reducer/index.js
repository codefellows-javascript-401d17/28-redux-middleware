import {combineReducers} from 'redux';
import categoryReducer from './category.js';
import expenseReducer from './expense.js';

export default combineReducers({
  categories: categoryReducer,
  expenses: expenseReducer
});

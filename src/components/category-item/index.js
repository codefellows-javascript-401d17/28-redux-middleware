import React from 'react';
import CategoryForm from '../category-form/'
import {
  categoryUpdate,
  categoryDelete
} from '../../action/category-actions.js';
import { connect } from 'react-redux';
import ExpenseForm from '../expense-form';
import { expenseCreate } from '../../action/expense-actions.js'
// import ExpenseItem from '../expense-item';


class CategoryItem extends React.Component {
  render() {
    let { category, categoryDelete, categoryUpdate, expenses } = this.props;

    console.log('__EXPENSES__(category-item):', expenses);

    return (
      <li key={this.props.category.id}>
        &lt;CategoryItem /&gt;
        <button onClick={() => {
          return this.props.categoryDelete(this.props.category)
        }}>X</button>
        <h4>name: {this.props.category.name}</h4>
        <p>budget: {this.props.category.budget}</p>

        <CategoryForm
          buttonText='Update'
          onComplete={this.props.categoryUpdate}
          category={this.props.category}
        />
        <ExpenseForm
          onComplete={this.props.expenseCreate}
          category={category}
          buttonText='Deduct'
        />
        <ul>
          {expenses.map((expense) => {
            return (
              <li>name: {expense.name} price: {expense.price}</li>
            )
          })}
        </ul>
      </li>


    )
  }
}

let mapStateToProps = (state, props) => ({
  expenses: state.expenses[props.category.id]
});
let mapDispatchToProps = dispatch => ({
  expenseCreate: (expense) => { return dispatch(expenseCreate(expense)) },
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category))
});

let bindToStore = connect(mapStateToProps, mapDispatchToProps);
CategoryItem = bindToStore(CategoryItem)
export default CategoryItem;
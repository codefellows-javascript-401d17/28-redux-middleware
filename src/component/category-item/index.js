
import React from 'react';
import {connect} from 'react-redux';

import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';
import CategoryForm from '../category-form';

import {categoryUpdate, categoryDelete} from '../../action/category-actions.js';
import {expenseCreate} from '../../action/expense-actions.js';

class CategoryItem extends React.Component {
  render() {
    let {category, categoryUpdate, categoryDelete, expenses} = this.props;
    console.log('__EXPENSES__', expenses);

    return (
      <section className='category-item'>
        <div className='content-container'>
          <div className='content'>
            <h2>{category.title}</h2>
            <button className='remove' onClick={() => categoryDelete(category)}>x</button>
          </div>
          <div className='editing'>
            <CategoryForm
              buttonText='update'
              category={category}
              onComplete={categoryUpdate} />
          </div>
        </div>

        <div className='expense-container'>
          <ExpenseForm
            categoryID={category.id}
            buttonText='create expense'
            onComplete={this.props.expenseCreate} />

          <ul className='expense-items'>
            {expenses.map(expense =>
              <ExpenseItem key={expense.id} expense={expense} />
            )}
          </ul>
        </div>
      </section>
    )
  }
}

let mapStateToProps = (state, props) => ({
  expenses: state.expenses[props.category.id]
});

let mapDispatchToProps = dispatch => ({
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category)),
  expenseCreate: (expense) => dispatch(expenseCreate(expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);

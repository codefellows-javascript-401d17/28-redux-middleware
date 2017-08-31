import React from 'react';
import {connect} from 'react-redux';

import CategoryForm from '../category-form';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';

import {categoryUpdate, categoryDelete} from '../../action/category-actions.js';
import {expenseUpdate, expenseDelete, expenseCreate} from '../../action/expense-actions.js'


class CategoryItem extends React.Component {
  render() {
    let {category, categoryUpdate, categoryDelete, expenseCreate, expense, expenses} = this.props;
    return(
      <li>
        <h2>{category.title}</h2>
        <h3>{category.budget}</h3>
        <button className='deleteButton' onClick={()=>categoryDelete(category)}>x</button>
        <div className='editing'>
          <CategoryForm
            buttonText='update category'
            category={category}
            onComplete={categoryUpdate}
            />
        </div>
        <ExpenseForm
          buttonText='add expense'
          categoryID={category.id}
          onComplete={expenseCreate}
          />
        <section>

          <ul>
            {expenses.map((item) => {
              return (
                <ExpenseItem
                  key={item.id}
                  expense={item}
                  />
              )
            })}
          </ul>
        </section>
      </li>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    expenses: state.expenses[props.category.id]
  }
}

let mapDispatchToProps = dispatch => ({
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category)),
  expenseCreate: (expense) => dispatch(expenseCreate(expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);

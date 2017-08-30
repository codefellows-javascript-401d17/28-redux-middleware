import React from 'react';
import {connect} from 'react-redux';

import ExpenseForm from '../expense-form';
import {ExpenseUpdate, ExpenseDelete} from '../../action/expense-actions.js';

class ExpenseItem extends React.Component {
  render() {
    let {expense, ExpenseDelete, ExpenseUpdate} = this.props;

    return (
      <li className='expense-item'>
        <p>{expense.content}</p>
        <button onClick={() => ExpenseDelete(expense)}>x</button>
        <ExpenseForm
          expense={expense}
          buttonText='update expense'
          onComplete={ExpenseUpdate} />
      </li>
    )
  }
}

let mapStateToProps = () => ({});
let mapDispatchToProps = (dispatch) => ({
  ExpenseUpdate: (expense) => dispatch(ExpenseUpdate(expense)),
  ExpenseDelete: (expense) => dispatch(ExpenseDelete(expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);

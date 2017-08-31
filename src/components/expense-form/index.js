import React from 'react';

class ExpenseForm extends React.Component {

  render() {
    return (
      <form>
        <h3>Add an expense</h3>
        <input
          type='text'
          name='expense-name-field'
          placeholder='enter an expense'
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='expense-price-field'
          placeholder='enter a price'
          onChange={this.handleChange}
        />
        <button type='submit'>{this.props.buttonText}</button>
      </form>
    )
  }
}

export default ExpenseForm


import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.expense ? propse.expense.id : null,
      timestamp: props.expense ? props.expense.timestamp : new Date(),
      name: props.expense ? props.expense.name : '',
      categoryID: props.expense ? propse.expense.categoryID : this.props.category.id,
      price:
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props) {
    if(props.expense) {
      this.setState(props.expense);
    }
  }

  handleChange(e) {

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete({...this.state});


  }
}

export default ExpenseForm;

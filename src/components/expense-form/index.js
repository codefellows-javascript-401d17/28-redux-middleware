import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.expense ? { ...props.expense } : { name: '', categoryID: props.category.id }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.expense) {
      this.setState({ ...props.expense });
    }
    if (props.categoryID) {
      this.setState({ categoryID: props.category.id });
    }
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
    //clears
    if(!this.props.expense) {
      this.setState({ name: '', price: '' })
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Add an expense</h3>
        <input
          type='text'
          name='name'
          placeholder='what did you buy'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='price'
          value={this.state.price}
          placeholder='how much did you waste on this'
          onChange={this.handleChange}
        />
        <button type='submit'>{this.props.buttonText}</button>
      </form>
    )
  }
}

export default ExpenseForm;

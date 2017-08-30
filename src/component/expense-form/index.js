mport React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.expense ? {...props.expense } : {content: '', categoryID: props.categoryID}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.expense) {
      this.setState({...props.expense});
    }

    if (props.categoryID) {
      this.setState({categoryID: props.categoryID})
    }
  }

  handleChange(e) {
    this.setState({ content: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
    if (!this.props.expense) {
      this.setState({ content: '' });
    }
  }

  render() {
    return (
      <form className='expense-form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='content'
          placeholder='content'
          value={this.state.content}
          onChange={this.handleChange} />

        <button type='submit'>{this.props.buttonText}</button>
      </form>
    )
  }
}

export default ExpenseForm;

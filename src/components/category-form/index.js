import React from 'react';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);

    //if category already on props, assign existing properties to state, otherwise initialize a state object
    this.state = (props.category ? {...props.category} : { name: '', budget: 0})
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.state.budget = parseInt(this.state.budget)
    this.props.onComplete({...this.state});
    //clears form values if category isn't on this.props
    if(!this.props.category) {
      this.setState({ name: '', budget: ''})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>&lt;CategoryForm /&gt;</p>
        <input
          type='text'
          id='submitField'
          name='name'
          onChange={this.handleChange}
          value={this.state.name}
          placeholder='enter a category name'
        />
        <input
          id='budgetField'
          type='text'
          name='budget'
          value={this.state.budget}
          onChange={this.handleChange}
          placeholder='enter a budget for this category'
        />
        <button type='submit'>{this.props.buttonText}</button>
      </form>
    )

  }
}

export default CategoryForm;
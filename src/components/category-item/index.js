import React from 'react';
import CategoryForm from '../category-form/'
import { 
  categoryUpdate,
  categoryDelete
} from '../../action/category-actions.js';
import {connect} from 'react-redux';

//TODO: extend to explicit


class CategoryItem extends React.Component {

  constructor(props) {
    super(props);
    console.log('category-item props', props);
  }

  render() {
    let {category, categoryDelete, categoryUpdate} = this.props;

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
        {/* TODO: get props onto categoryItem, then can pass: <ExpenseForm onComplete={this.props.expenseCreate}/> and call in handleSubmit */}
        {/* TODO: modularize expense form */}
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
        <button type='submit'>Add</button>
      </li>


    )
  }
}

let mapStateToProps = () => ({});
let mapDispatchToProps = dispatch => ({
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category))
});

let bindToStore = connect(mapStateToProps, mapDispatchToProps);
CategoryItem = bindToStore(CategoryItem)
export default CategoryItem;
import React from 'react';
import CategoryForm from '../category-form/'
import {
  categoryUpdate,
  categoryDelete
} from '../../action/category-actions.js';
import { connect } from 'react-redux';
import ExpenseForm from '../expense-form'

//TODO: extend to explicit


class CategoryItem extends React.Component {

  constructor(props) {
    super(props);
    console.log('category-item props', props);
  }

  render() {
    let { category, categoryDelete, categoryUpdate } = this.props;

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
          buttonText='Deduct'
        />
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
import React from 'react';
import ReactDOM from 'react-dom';

import {
  categoryCreate,

} from '../../action/category-actions.js';
import CategoryForm from '../category-form/'
import { connect } from 'react-redux';
import CategoryItem from '../../components/category-item'

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('mounted');
  }

  render() {
    return (
      <section>
        <h2>Dashboard</h2>
        <CategoryForm buttonText='Create' onComplete={this.props.categoryCreate} />
        {this.props.categories.map((category) => {
          return (
            <CategoryItem categoryDelete={this.props.categoryDelete} categoryUpdate={this.props.categoryUpdate} category={category} />
          )
        })}

      </section>

    )
  }
}

//gives you this.category.props
const mapStateToProps = (state) => {
  return (
    { categories: state.categories }
  )
}

const mapDispatchToProps = (dispatch, getState) => {
  return (
    {
      categoryCreate: (category) => { return dispatch(categoryCreate(category)) }
    }
  )
}

//binds redux store to Dashboard react component
let bindToStore = connect(mapStateToProps, mapDispatchToProps)
//overwrites old component with new component
//now configured with specific props, and exports
DashboardContainer = bindToStore(DashboardContainer)

//props on DashboardContainer: categories, categoryCreate, categoryUpdate, categoryDelete
export default DashboardContainer;
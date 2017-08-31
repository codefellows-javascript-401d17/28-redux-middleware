
let initialState = {};

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    //...in addition, when create a new category add its id prop and assign to empty object
    case 'CATEGORY_CREATE':
      return { ...state, [payload.id]: [] };
    case 'CATEGORY_DELETE':
      return { ...state, [payload.id]: undefined }
    case 'EXPENSE_CREATE':
      let {categoryID} = payload;
      let categoryExpenses = state[categoryID]
      //creates copy of state
      //pushes expense payload as an array to computed [categoryID] property
      return {...state, [categoryID]: [...categoryExpenses, payload]}
    default:
      return state;
  }
}
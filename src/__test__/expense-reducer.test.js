import expenseReducer from '../reducer/expense.js';

describe('Expense Reducer', () => {
  let expense = {
    id: '1234',
    categoryID: 'category',
    name: 'test name',
    price: 10,
    timestamp: new Date()
  }

  test('initial state should be an empty object', () => {
    let result = expenseReducer(undefined, { type: null });
    expect(result).toEqual({});
  });

  test('if no action type is provided the state should be returned', () => {
    let state = [
      { id: '1234', name: 'test name', price: 12 }
    ]

    let result = expenseReducer(state, {type: null});
    expect(result).toEqual(state);
  });

  test('EXPENSE_CREATE should append a expense to the expenses object', () => {
    let action = {
      type: 'EXPENSE_CREATE',
      payload: expense
    }
    let category = []

    let result = expenseReducer({category}, action);
    expect(result.category.length).toBe(1);
    expect(result.category[0]).toBe(action.payload);
  });

  test('EXPENSE_UPDATE should update an expense in the expenses object', () => {
    let category = []

    let state = expenseReducer({category}, {type: 'EXPENSE_CREATE', payload: expense});

    let action = {
      type: 'EXPENSE_UPDATE',
      payload: {
        id: '1234',
        categoryID: 'category',
        name: 'new name',
        price: 20,
        timestamp: new Date()
      }
    }

    let result = expenseReducer(state, action);
    expect(result.category[0]).toBe(action.payload)
  })

  test('EXPENSE_DELETE should remove an expense from the expenses object', () => {
    let category = []

    let state = expenseReducer({category}, {type: 'EXPENSE_CREATE', payload: expense});

    let action = {
      type: 'EXPENSE_DELETE',
      payload: expense
    }

    let result = expenseReducer(state, action);
    expect(result.category.length).toBe(0);
  })
});

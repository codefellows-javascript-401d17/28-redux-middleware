import expenseReducer from '../reducer/expense.js';

describe('Expense Reducer', () => {
  let state = {
    expenses: { 5678: [{ id: '1234', categoryID: '5678', name: 'some name', price: 10 }] }
  }

  test('initialState state should be an empty array', () => {
    let result = expenseReducer(undefined, {type: null});
    expect(result).toEqual({})
  })

  test('if no action type is provided the default state should be returned', () => {
    let result = expenseReducer(state, { type: null });
    expect(result).toEqual(state);
  })

  test('EXPENSE_CREATE should append an expense to the expense array', () => {
    let action = {
      type: 'EXPENSE_CREATE',
      payload: 'sample payload'
    }

    let result = expenseReducer([], action);
    expect(result.length).toBe(1);
    expect(result[0]).toBe(action.payload);
  })

  test('EXPENSE_UPDATE should update an expense', () => {
    let newExpense = {
      id: '1234',
      timestamp: new Date(),
      name: 'new name',
      price: 20,
      categoryID: 5678
    }

    let action = {
      type: 'EXPENSE_UPDATE',
      payload: newExpense
    }

    let result = expenseReducer(state, action);
    expect(result[0]).toBe(action.payload);
  })

  test('EXPENSE_DELETE should remove an expense', () => {
    let action = {
      type: 'EXPENSE_DELETE',
      payload: {id: '1234'}
    }

    let result = expenseReducer(state, action);
    expect(result.length).toBe(0);
  })
});

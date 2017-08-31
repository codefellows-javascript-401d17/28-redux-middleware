import {expenseCreate, expenseUpdate, expenseDelete} from '../action/expense-actions.js';

describe('Expense Actions', () => {
  let expense = {
    id: '1234',
    timestamp: new Date(),
    name: 'test name',
    price: 10
  }

  test('expenseCreate returns a EXPENSE_CREATE action', () => {
    let action = expenseCreate({ name: 'test name', price: 10 });
    expect(action.type).toEqual('EXPENSE_CREATE');
    expect(action.payload).toBeTruthy();
    expect(action.payload.timestamp).toBeTruthy();
    expect(action.payload.name).toBe('test name');
    expect(action.payload.price).toBe(10)
  })

  test('expenseDelete returns a EXPENSE_DELETE action', () => {
    let action = expenseDelete(expense);
    expect(action).toEqual({
      type: 'EXPENSE_DELETE',
      payload: expense
    });
  })

  test('expenseUpdate returns a EXPENSE_UPDATE action', () => {
    let action = expenseUpdate(expense);
    expect(action).toEqual({
      type: 'EXPENSE_UPDATE',
      payload: expense
    });
  })
});


import uuid from 'uuid/v1';

export const expenseCreate = (expense) => ({
  type: 'expense_CREATE',
  payload: {...expense, id: uuid()}
})

export const expenseUpdate = (expense) => ({
  type: 'expense_UPDATE',
  payload: {...expense}
})

export const expenseDelete = (expense) => ({
  type: 'expense_DELETE',
  payload: {...expense}

import {categoryCreate, categoryUpdate, categoryDelete} from '../action/category-actions.js';

describe('Category Actions', () => {
  let category = {
    id: '1234',
    timestamp: new Date(),
    name: 'test name',
    budget: 10
  }

  test('categoryCreate returns a CATEGORY_CREATE action', () => {
    let action = categoryCreate({ name: 'test name', budget: 10 });
    expect(action.type).toEqual('CATEGORY_CREATE');
    expect(action.payload).toBeTruthy();
    expect(action.payload.timestamp).toBeTruthy();
    expect(action.payload.name).toBe('test name');
    expect(action.payload.budget).toBe(10)
  })

  test('categoryDelete returns a CATEGORY_DELETE action', () => {
    let action = categoryDelete(category);
    expect(action).toEqual({
      type: 'CATEGORY_DELETE',
      payload: category
    });
  })

  test('categoryUpdate returns a CATEGORY_UPDATE action', () => {
    let action = categoryUpdate(category);
    expect(action).toEqual({
      type: 'CATEGORY_UPDATE',
      payload: category
    });
  })
});

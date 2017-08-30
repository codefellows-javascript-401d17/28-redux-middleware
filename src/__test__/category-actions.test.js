import { categoryCreate, categoryUpdate, categoryDelete } from '../action/category-actions.js';

describe('Category Actions', function () {
  test('categoryCreate returns CATEGORY_CREATE', () => {
    let action = categoryCreate({ name: 'foo', budget: 1234 });
    expect(action.type).toEqual('CATEGORY_CREATE');
    expect(action.payload.name).toBe('foo');
    expect(action.payload.budget).toBe(1234);
    expect(action.payload.id).toBeTruthy();
    expect(action.payload.timestamp).toBeTruthy();
  })
  test('categoryDelete returns CATEGORY_DELETE', () => {
    let category = ({
      name: 'bar',
      budget: 7890,
      timestamp: new Date(),
      id: '1234-asdf-hjkl-0987'
    })
    let action = categoryDelete(category);
    expect(action).toEqual({
      type: 'CATEGORY_DELETE',
      payload: category
    })
  });
  test('categoryUpdate returns a CATEGORY_UPDATE action', () => {
    let category = { id: '1234', timestamp: new Date(), name: 'test title', budget:9876 };
    let action = categoryUpdate(category);
    expect(action).toEqual({
      type: 'CATEGORY_UPDATE',
      payload: category
    });
  });
})
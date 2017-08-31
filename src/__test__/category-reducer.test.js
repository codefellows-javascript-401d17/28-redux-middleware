import categoryReducer from '../reducer/category.js';

describe('Category Reducer', () => {
  test('initial state should be an empty array', () => {
    let result = categoryReducer(undefined, { type: null });
    expect(result).toEqual([]);
  });

  test('if no action type presented, state should be returned', () => {
    let state = [
      { id: 'testid', title: 'test title' }
    ]

    let result = categoryReducer(state, { type: null });
    expect(result).toEqual(state);
  });

  test('CATEGORY_CREATE should append category to categories array', () => {
    let action = {
      type: 'CATEGORY_CREATE',
      payload: 'test payload'
    }

    let result = categoryReducer([], action);
    expect(result.length).toBe(1);
    expect(result[0]).toBe(action.payload);
  });
});

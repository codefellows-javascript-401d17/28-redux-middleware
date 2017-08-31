import categoryReducer from '../reducer/category.js';

describe('Category Reducer', () => {
  test('given undefined state and null action type, returns initial state of empty object by default', () => {
    let testState = categoryReducer(undefined, { type: null });
    expect(testState).toEqual([]);
  });
  test('when state exists and no action type is presented, the state should be returned', () => {
    let state = [
      { name: 'foo', budget: 1234 },
      { name: 'bar', budget: 6789 }
    ];
    let result = categoryReducer(state, { type: null });
    expect(result).toEqual(state);
  })
  test('CATEGORY_CREATE appends category to state', () => {
    let action = {
      type: 'CATEGORY_CREATE',
      payload: 'fake payload'
    };
    let state = [
      { name: 'foo', budget: 1234 },
      { name: 'bar', budget: 6789 }
    ]
    let result = categoryReducer(state, action);
    expect(result[2]).toBe(action.payload);
  })
});


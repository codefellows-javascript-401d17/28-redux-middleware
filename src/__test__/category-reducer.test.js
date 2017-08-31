import categoryReducer from '../reducer/category.js';

describe('Category Reducer', () => {
  test('given undefined state and null action type, returns initial state of empty object by default', () => {
    let testState = categoryReducer(undefined, { type: null });
    expect(testState).toEqual([]);
  });
});


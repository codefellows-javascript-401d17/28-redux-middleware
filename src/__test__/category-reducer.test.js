import categoryReducer from '../reducer/category.js';

describe('Category Reducer', () => {
  let state = [
    {id: '1234', name: 'some name', budget: 10 }
  ]

  test('initialState state should be an empty array', () => {
    let result = categoryReducer(undefined, {type: null});
    expect(result).toEqual([])
  })

  test('if no action type is provided the default state should be returned', () => {
    let result = categoryReducer(state, { type: null });
    expect(result).toEqual(state);
  })

  test('CATEGORY_CREATE should append a category to the categories array', () => {
    let action = {
      type: 'CATEGORY_CREATE',
      payload: 'sample payload'
    }

    let result = categoryReducer([], action);
    expect(result.length).toBe(1);
    expect(result[0]).toBe(action.payload);
  })

  test('CATEGORY_UPDATE should update a category', () => {
    let newCategory = {
      id: '1234',
      timestamp: new Date(),
      name: 'new name',
      budget: 20
    }

    let action = {
      type: 'CATEGORY_UPDATE',
      payload: newCategory
    }

    let result = categoryReducer(state, action);
    expect(result[0]).toBe(action.payload);
  })

  test('CATEGORY_DELETE should remove a category', () => {
    let action = {
      type: 'CATEGORY_DELETE',
      payload: {id: '1234'}
    }

    let result = categoryReducer(state, action);
    expect(result.length).toBe(0);
  })
});

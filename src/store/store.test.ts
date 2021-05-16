import { Item } from './types';
import store, { InitialState } from './index';
import { addNewItem, removeItem } from './actions';

describe('store reducer', () => {
  const state: InitialState = {
    shoppingCart: [
      { id: '1', name: 'exist item', url: 'http://asdasdsad.cs' },
      { id: '3', name: 'exist item', url: 'http://asdasdsad.cs' },
    ],
  };

  test('should add new item to store', () => {
    const newItem: Item = {
      id: '2',
      name: 'new item',
      url: 'http://aasdsad.com',
    };

    const newReducer = store(state, addNewItem(newItem));

    expect(newReducer.shoppingCart).toHaveLength(3);
    expect(newReducer.shoppingCart).toContainEqual(newItem);
  });

  test('should remove the item from store', () => {
    const newReducer = store(state, removeItem('3'));

    expect(newReducer.shoppingCart).toHaveLength(1);
  });
});

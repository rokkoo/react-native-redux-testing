import { addNewItemType, Item, removeItemType } from '../types';

export const addNewItem = (item: Item): addNewItemType => {
  return {
    type: '@items/add',
    item,
  };
};

export const removeItem = (id: string): removeItemType => {
  return {
    type: '@items/remove',
    id,
  };
};

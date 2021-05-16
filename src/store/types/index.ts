export interface Item {
  id: string;
  name: string;
  url: string;
}

export type addNewItemType = {
  type: '@items/add';
  item: Item;
};

export type removeItemType = {
  type: '@items/remove';
  id: string;
};

export type Actions = addNewItemType | removeItemType;

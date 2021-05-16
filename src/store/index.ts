import { Actions, Item } from './types';

export interface InitialState {
  shoppingCart: Item[];
}

const initialState: InitialState = {
  shoppingCart: [],
};

export default function (state = initialState, action: Actions): InitialState {
  switch (action.type) {
    case '@items/add': {
      return { ...state, shoppingCart: [...state.shoppingCart, action.item] };
    }

    case '@items/remove': {
      const newShoppingCart = state.shoppingCart.filter(
        (item) => item.id !== action.id
      );

      return { ...state, shoppingCart: newShoppingCart };
    }

    default:
      return state;
  }
}

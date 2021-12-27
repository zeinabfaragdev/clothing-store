import CartActionTypes from "./cart-types";

export const toggleCartHidden = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
  };
};

export const addCartItem = (item) => {
  return {
    type: CartActionTypes.ADD_CART_ITEM,
    payload: item,
  };
};

export const clearCartItem = (itemId) => {
  return {
    type: CartActionTypes.CLEAR_CART_ITEM,
    payload: itemId,
  };
};

export const decreaseCartItem = (item) => {
  return {
    type: CartActionTypes.DECREASE_CART_ITEM,
    payload: item,
  };
};

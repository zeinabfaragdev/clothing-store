import CartActionTypes from "./cart-types";
import { addItemToCart, decreaseCartItem } from "./cart-utils";

const INITIAL_STATE = {
  cartItems: [],
  hidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_CART_ITEM:
      let cartItems = addItemToCart(state.cartItems, action.payload);
      return {
        ...state,
        cartItems: cartItems,
      };
    case CartActionTypes.CLEAR_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    case CartActionTypes.DECREASE_CART_ITEM:
      let decreasedCart = decreaseCartItem(state.cartItems, action.payload);
      return {
        ...state,
        cartItems: decreasedCart,
      };

    default:
      return state;
  }
};

export default cartReducer;

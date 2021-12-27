import CartActionTypes from "./cart-types";
import { addItemToCart } from "./cart-utils";

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
      console.log(cartItems);
      return {
        ...state,
        cartItems: cartItems,
      };

    default:
      return state;
  }
};

export default cartReducer;

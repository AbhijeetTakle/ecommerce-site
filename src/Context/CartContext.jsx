import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartFun = (state, action) => {
  switch (action.type) {
    case "ADD_ITEMS_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, cartQuantity: 1 }],
      };
    case "INCREMENT_ITEMS":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, cartQuantity: item.cartQuantity + 1 }
            : item
        ),
      };
    case "DECREMENT_ITEMS":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                cartQuantity:
                  item.cartQuantity > 1
                    ? item.cartQuantity - 1
                    : item.cartQuantity,
              }
            : item
        ),
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const initialCartValues = {
    cart: [],
  };

  const [cartState, dispatchCart] = useReducer(cartFun, initialCartValues);
  return (
    <CartContext.Provider value={{ cartState, dispatchCart }}>
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);
export { CartProvider, useCart };

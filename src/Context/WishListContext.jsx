import { createContext, useContext, useReducer } from "react";

const WishContext = createContext();

const wishFun = (state, action) => {
  switch (action.type) {
    case "ADD_ITEMS_TO_WISHLIST":
      return {
        ...state,
        wish: [...state.wish, { ...action.payload, wishQuantity: 1 }],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wish: state.wish.filter((item) => item.id !== action.payload.id),
      };

    default:
      return;
  }
};

const WishProvider = ({ children }) => {
  const initialWishValues = {
    wish: [],
  };

  const [wishState, dispatchWish] = useReducer(wishFun, initialWishValues);
  return (
    <WishContext.Provider value={{ wishState, dispatchWish }}>
      {children}
    </WishContext.Provider>
  );
};
const useWish = () => useContext(WishContext);
export { WishProvider, useWish };

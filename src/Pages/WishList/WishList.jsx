import { React } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import { useWish } from "../../Context/WishListContext";
import "./WishList.css";
const WishList = () => {
  const { wishState, dispatchWish } = useWish();
  const { cartState, dispatchCart } = useCart();

  return (
    <div className="wishList-section">
      <div className="wishList-col">
        <h1>My Wishlist({wishState.wish.length})</h1>
        <br />
        <div className="wishlist">
          {wishState.wish.map((wishItem) => {
            return (
              <div className="wishlist-item">
                <div>
                  <img src={wishItem.image} />
                </div>
                <div className="wishlist-desc">
                  <div className="wishlist-info">
                    <div>
                      <h2>AIR JORDEN 1</h2>
                      <h4>High Zoom Air CMFT PSG Paris Saint-Germain</h4>
                      <h3>Price: Rs.9600</h3>
                    </div>
                    <i
                      className="far fa-trash-alt"
                      onClick={() =>
                        dispatchWish({
                          type: "REMOVE_FROM_WISHLIST",
                          payload: wishItem,
                        })
                      }
                    ></i>
                  </div>
                  {cartState.cart.some((item) => item.id === wishItem.id) ? (
                    <button className="wishlist-btn">
                      <Link className="link" to="/cart">
                        Go to cart
                      </Link>
                    </button>
                  ) : (
                    <button
                      className="wishlist-btn"
                      onClick={() =>
                        dispatchCart({
                          type: "ADD_ITEMS_TO_CART",
                          payload: wishItem,
                        })
                      }
                    >
                      Move to Cart
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export { WishList };

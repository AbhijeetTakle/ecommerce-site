import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import { useWish } from "../../Context/WishListContext";
import "./ProductCard.css";

const ProductCard = ({ productInfo }) => {
  const { cartState, dispatchCart } = useCart();
  const { wishState, dispatchWish } = useWish();
  return (
    <div className="shoe-card">
      <div>
        <img src={productInfo.image} />
      </div>
      <div className="card-desc">
        <h3>{productInfo.categoryName}</h3>
        <h2>{productInfo.title}</h2>
        <div className="card-price">
          <h4>Price: {productInfo.originalPrice}</h4>
          <p>Discount: {productInfo.discount}%</p>
          <h3>Discounted Price: Rs.{productInfo.discountedPrice}</h3>
          <p className="prod-rating">{productInfo.rating}⭐</p>
        </div>
      </div>
      <div className="card-btn">
        {wishState.wish.some((w) => w.id === productInfo.id) ? (
          <button className="btn">
            <Link className="link" to="/wishlist">
              Go to wishlist
            </Link>
          </button>
        ) : (
          <button
            className="btn"
            onClick={() =>
              dispatchWish({
                type: "ADD_ITEMS_TO_WISHLIST",
                payload: productInfo,
              })
            }
          >
            Add to wishlist
          </button>
        )}

        {cartState.cart.some((p) => p.id === productInfo.id) ? (
          <button
            className="btn"
            onClick={() =>
              dispatchCart({ type: "GO_TO_CART", payload: productInfo })
            }
          >
            <Link className="link" to="/cart">
              Go to cart
            </Link>
          </button>
        ) : (
          <button
            className="btn"
            onClick={() =>
              dispatchCart({
                type: "ADD_ITEMS_TO_CART",
                payload: productInfo,
              })
            }
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};
export { ProductCard };

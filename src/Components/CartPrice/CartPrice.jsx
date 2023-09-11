import { useCart } from "../../Context/CartContext";

const CartPrice = () => {
  const { cartState, dispatchCart } = useCart();

  const totalCartPrice = cartState.cart.reduce(
    (acc, curr) =>
      acc + parseInt(curr.originalPrice) * parseInt(curr.cartQuantity),
    0
  );
  const discount = cartState.cart.reduce(
    (acc, curr) =>
      acc + (parseInt(curr.originalPrice) - parseInt(curr.discountedPrice)),
    0
  );
  const finalPrice = totalCartPrice - discount;
  console.log(cartState.cart);
  const totalQuantity = cartState.cart.reduce(
    (acc, curr) => acc + curr.cartQuantity,
    0
  );

  return (
    <div className="price-details">
      <p>Price Details</p>
      <hr />
      <div className="price">
        <p className="price-txt">Price</p>
        <p className="price-txt">{totalCartPrice}/-</p>
      </div>
      <div className="price">
        <p className="price-txt">Qty</p>
        <p className="price-txt">{totalQuantity}</p>
      </div>
      <div className="price">
        <p className="price-txt">Discount</p>
        <p className="price-txt">{discount}/-</p>
      </div>
      <hr />
      <div className="price">
        <p className="price-txt">Total</p>
        <p className="price-txt">{finalPrice}/-</p>
      </div>
      <hr />
      <div className="coupun">
        <p className="coupun-txt">Coupun code (if any)</p>
        <input />
        <button className="btn">Apply</button>
      </div>
    </div>
  );
};
export { CartPrice };

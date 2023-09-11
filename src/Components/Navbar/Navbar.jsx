import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import { useSidebar } from "../../Context/SidebarToggleContext";
import { useWish } from "../../Context/WishListContext";
import {
  FaUserCircle,
  FaShoppingCart,
  FaHeart,
  FaHamburger,
} from "react-icons/fa";

import "./Navbar.css";
const Navbar = () => {
  const { cartState } = useCart();
  const { wishState } = useWish();
  const { showSidebar, sidebarToggler } = useSidebar();
  console.log(showSidebar);
  return (
    <header className="nav-header">
      <label
        className="sidebar-btn"
        onClick={() => sidebarToggler((showSidebar) => !showSidebar)}
      >
        <i class="fas fa-grip-lines fa-2x">
          <FaHamburger />
        </i>
      </label>

      <Link className="link" to="/">
        {" "}
        <div className="nav-logo">
          <h2>RARE KICKS</h2>
        </div>
      </Link>

      <div className="search-container">
        <i className="fas fa-search"></i>
        <input type="search" placeholder="Search for product" />
      </div>
      <div className="nav-icons">
        <div className="sign-in">
          <Link className="link" to="/signup">
            {" "}
            <p>Sign in</p>
          </Link>
        </div>
        <Link className="link" to="/wishlist">
          {" "}
          <div className="heart-badge">
            <i className="fas fa-heart fa-2x">
              <FaHeart />
            </i>
            {wishState.wish.length === 0 ? null : (
              <div className="notification-badge flex-row">
                <span>{wishState.wish.length}</span>
              </div>
            )}
          </div>
        </Link>

        <Link className="link" to="/cart">
          <div className="heart-badge">
            <i className="fas fa-shopping-cart fa-2x">
              <FaShoppingCart />
            </i>
            {cartState.cart.length === 0 ? null : (
              <div className="notification-badge flex-row">
                <span>{cartState.cart.length}</span>
              </div>
            )}
          </div>
        </Link>
        <div className="account">
          <a className="account-avatar">
            <i className="fas fa-user-circle fa-2x">
              <FaUserCircle />
            </i>
          </a>
        </div>
      </div>
    </header>
  );
};
export { Navbar };

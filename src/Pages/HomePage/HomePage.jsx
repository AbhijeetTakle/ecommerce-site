import "./HomePage.css";
import { Link } from "react-router-dom";
import { useCategory } from "../../Context/CategoryContext";
import { useFilter } from "../../Context/FilterContext";

const HomePage = () => {
  const { categoryList } = useCategory();
  const { state, dispatch } = useFilter();
  console.log(categoryList);
  return (
    <div>
      <div className="home-container">
        <div className="home-img-container">
          <div className="bg-img-container"></div>
          <div className="home-page-text">
            <div className="main-text">
              <h4>Welcome to Rare kicks,</h4>
              <div>
                <h1>FIND YOUR KICKS</h1>
              </div>
              <button>
                <Link className="link" to="/product">
                  Shop Now
                </Link>
              </button>
            </div>
          </div>
          <div className="overlay"></div>
        </div>
        <div className="featured-products">
          <p>Featured Brands.</p>
        </div>
      </div>
      <div className="featured-brands">
        {categoryList.map(({ categoryName, image }) => {
          return (
            <div
              onClick={() => {
                dispatch({ type: "CATEGORY", payload: categoryName });
              }}
              className="brand"
            >
              <Link to="/product">
                <img src={image} />
                <div className="brand-overlay">
                  <p className="overlay-msg">Shop Now</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <footer className="footer">
        <div className="footer-section">
          <h3>IMPORTANT LINKS</h3>
          <h5>Refunds/Cancellation</h5>
          <h5>Terms and Conditions</h5>
          <h5>FAQ</h5>
          <h5>Privacy Policy</h5>
        </div>
        <div className="footer-section">
          <h3>NEED HELP?</h3>
          <h5>My Account</h5>
          <h5>Size Chart</h5>
          <h5>Contact Us</h5>
        </div>
        <div className="footer-section">
          <h3>FOLLOW</h3>
          <h5>Instagram</h5>
          <h5>Facebook</h5>
        </div>
        <div className="footer-section">
          <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
          <h5>Sign up to our newsletter for new product launches!</h5>
          <input type="text" placeholder="Email address" />
        </div>
      </footer>
    </div>
  );
};
export default HomePage;

import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div className="signUp-container flex-col">
      <form>
        <p className="form-name">Login</p>
        <div className="sign-mail">
          <p className="required">Email Address</p>
          <input type="email" placeholder="test@gmail.com" required />
        </div>
        <div className="sign-password">
          <p className="required">Password</p>
          <input type="password" placeholder="******" required />
        </div>
        <div className="login-flex-row">
          <div className="flex-row-check checkbox">
            <input type="checkbox" required />
            <p className="required">I accept all Terms & Conditions</p>
          </div>
          <Link className="link" to="/forgotpassword">
            <p>Forgot your Password?</p>
          </Link>
        </div>
        <button className="sign-btn">Login</button>
        <div className="flex-row">
          <Link className="link" to="/signup">
            <p>Create New Account</p>
          </Link>

          <i className="fa fa-chevron-right"></i>
        </div>
      </form>
    </div>
  );
};
export { Login };

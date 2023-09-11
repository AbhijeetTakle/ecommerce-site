import { Link } from "react-router-dom";
import "./SignUp.css";
const SignUp = () => {
  return (
    <div className="signUp-container flex-col">
      <form>
        <p className="form-name">Sign Up</p>
        <div className="sign-name">
          <div>
            <p className="required">First Name</p>
            <input type="text" placeholder="First Name" required />
          </div>
          <div>
            <p className="required">Last Name</p>
            <input type="text" placeholder="Last Name" required />
          </div>
        </div>
        <div className="sign-mail">
          <p className="required">Email Address</p>
          <input type="email" placeholder="test@gmail.com" required />
        </div>
        <div className="sign-password">
          <p className="required">Password</p>
          <input type="password" placeholder="******" required />
        </div>
        <div className="flex-row-check checkbox">
          <input type="checkbox" required />
          <p className="required">I accept all Terms & Conditions</p>
        </div>
        <button className="sign-btn">Create New Account</button>
        <div className="flex-row">
          <Link className="link" to="/login">
            {" "}
            <p>Already have an account</p>
          </Link>

          <i className="fa fa-chevron-right"></i>
        </div>
      </form>
    </div>
  );
};
export { SignUp };

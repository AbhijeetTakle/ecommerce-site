import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="signUp-container flex-col">
      <form>
        <p className="form-name">Forgot Password ?</p>
        <div className="sign-mail">
          <p className="required">Email Address</p>
          <input type="email" placeholder="test@gmail.com" required />
        </div>
        <div className="sign-password">
          <p className="required">Mobile No.</p>
          <input type="number" placeholder="8888888888" required />
        </div>

        <button className="sign-btn">Reset Password</button>
        <div className="flex-row">
          <i className="fa fa-chevron-left"></i>
          <Link className="link" to="/signup">
            <p>Back to Sign In</p>
          </Link>
        </div>
      </form>
    </div>
  );
};
export { ForgotPassword };

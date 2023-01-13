import "./emailLogin.css";
import { Link } from "react-router-dom";

function EmailLogin() {
  return (
    <div className="email-login__wrapper">
      <div className="login__container">
        <input id="email-input" type="email" placeholder="email address" />
        <div className="login-button">
          <Link to="/email/create">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default EmailLogin;

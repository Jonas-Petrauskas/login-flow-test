import "./createEmail.css";
import { Link } from "react-router-dom";

function CreateEmail() {
  return (
    <div className="email-login__wrapper">
      <div className="email-login__container">
        <h3 className="container-title">Create new account?</h3>
        <input id="email-input" type="email" placeholder="email address" />
        <div className="checkbox-container">
          <input id="checkbox" type="checkbox" />
          <span id="terms-text">Agree to Marketing Emails</span>
        </div>
        <div className="create-account-buton">
          <Link to="/auth/discord">Create New Account</Link>
        </div>
      </div>
    </div>
  );
}

export default CreateEmail;

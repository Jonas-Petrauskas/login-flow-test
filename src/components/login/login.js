import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="App">
      <div className="login-container">
        <a
          className="login-discord-button"
          id="login"
          href="https://discord.com/api/oauth2/authorize?client_id=1063381224267194390&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fdiscord&response_type=token&scope=identify"
        >
          <span>Login with Discord</span>
        </a>

        <div className="login-email-button">
          <Link to="/email/login">Login with Email</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

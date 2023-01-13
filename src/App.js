import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import Dashboard from "./components/dashboard/dashboard";
import EmailLogin from "./components/emailLogin/emailLogin";
import CreateEmail from "./components/createEmail/createEmail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/auth/discord" element={<Dashboard />} />
      <Route path="/email/login" element={<EmailLogin />} />
      <Route path="/email/create" element={<CreateEmail />} />
    </Routes>
  );
}

export default App;

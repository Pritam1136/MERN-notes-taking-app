import React from "react";
import authStore from "../store/authStore";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const store = authStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await store.login();

    // Navigate
    navigate("/");
  };
  return (
    <form onSubmit={handleLogin}>
      <input
        value={store.loginForm.email}
        onChange={store.updateLoginForm}
        type="email"
        name="email"
      />
      <input
        onChange={store.updateLoginForm}
        value={store.loginForm.password}
        type="password"
        name="password"
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;

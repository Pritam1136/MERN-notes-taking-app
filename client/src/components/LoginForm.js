import React from "react";
import authStore from "../store/authStore";

function LoginForm() {
  const store = authStore();
  return (
    <form onSubmit={store.login}>
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

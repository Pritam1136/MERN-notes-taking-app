import React from "react";
import authStore from "../store/authStore";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const store = authStore();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    await store.signup();
    navigate("/login");
  };

  return (
    <form onSubmit={handleSignup}>
      <input
        value={store.signupForm.email}
        onChange={store.updateSignupForm}
        type="email"
        name="email"
      />
      <input
        value={store.signupForm.password}
        onChange={store.updateSignupForm}
        type="password"
        name="password"
      />
      <button type="submit">Signup</button>
    </form>
  );
}

export default SignupForm;

import React from "react";

function LogIn() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LogIn;

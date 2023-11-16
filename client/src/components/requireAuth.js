import React from "react";
import authStore from "../store/authStore";

function RequireAuth(props) {
  const store = authStore();
  if (!store.logginIn) {
    return <div>Please log In</div>;
  }
  return <div>{props.children}</div>;
}

export default RequireAuth;

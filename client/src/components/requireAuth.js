/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import authStore from "../store/authStore";

function RequireAuth(props) {
  const store = authStore();

  useEffect(() => {
    if (store.logginIn == null) {
      store.checkAuth();
    }
  }, []);

  if (store.logginIn == null) {
    return <div> Loading....</div>;
  }

  if (store.logginIn == false) {
    return <Navigate to="/login" />;
  }
  return <div>{props.children}</div>;
}

export default RequireAuth;

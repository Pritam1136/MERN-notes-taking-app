/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import authStore from "../store/authStore";

function Logout() {
  const store = authStore();

  useEffect(() => {
    store.logout();
  }, []);
  return <h1>You are logged out</h1>;
}

export default Logout;

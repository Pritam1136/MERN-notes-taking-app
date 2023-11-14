/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import { create } from "zustand";
import axios from "axios";

const authStore = create((set) => ({
  loginForm: {
    email: "",
    password: "",
  },

  updateLoginForm: (e) => {
    const { name, value } = e.target;

    const { loginForm } = authStore.getState();
    set({
      loginForm: {
        ...loginForm,
        [name]: value,
      },
    });
  },
}));

export default { authStore };

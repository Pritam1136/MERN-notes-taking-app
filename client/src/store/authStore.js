/* eslint-disable no-use-before-define */
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

    set((state) => {
      return {
        loginForm: {
          ...state.loginForm,
          [name]: value,
        },
      };
    });
  },
  login: async (e) => {
    e.preventDefault();

    const { loginFrom } = authStore.getState();

    const res = await axios.post("/login", loginFrom, {
      withCredentials: true,
      crossorigin: true,
    });
    console.log(res);
  },
}));

export default authStore;

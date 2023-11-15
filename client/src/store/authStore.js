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
    console.log("Error detection 1");

    const res = await axios.post("/login", loginFrom, {
      withCredentials: true,
    });
    console.log("Error detection 2");
    console.log(res);
  },
}));

export default authStore;

/* eslint-disable no-use-before-define */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import { create } from "zustand";
import axios from "axios";

const authStore = create((set) => ({
  logginIn: null,

  loginForm: {
    email: "",
    password: "",
  },

  signupForm: {
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
  updateSignupForm: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        signupForm: {
          ...state.signupForm,
          [name]: value,
        },
      };
    });
  },
  login: async () => {
    const { loginForm } = authStore.getState();

    const res = await axios.post("/login", loginForm, {
      withCredentials: true,
    });

    set({ logginIn: true, loginForm: { email: "", password: "" } });
  },

  checkAuth: async () => {
    try {
      await axios.get("/check-auth", {
        withCredentials: true,
      });
      set({ logginIn: true });
    } catch (error) {
      set({ logginIn: false });
    }
  },
  signup: async () => {
    const { signupForm } = authStore.getState();

    const res = await axios.post("/signup", signupForm, {
      withCredentials: true,
    });

    set({
      signupForm: {
        email: "",
        password: "",
      },
    });
  },
}));

export default authStore;

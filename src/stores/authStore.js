import { makeAutoObservable } from "mobx";
import instance from "./instance";
import decode from "jwt-decode";

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }
  // If this.user has a value, it means the user is logged in, ELSE if it's null, they are not!!!
  user = null;

  setUser = (token) => {
    localStorage.setItem("myToken", token);
    this.user = decode(token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  signup = async (userData) => {
    try {
      const res = await instance.post("/signup", userData);
      this.setUser(res.data.token);
    } catch (error) {
      console.log(
        "🚀 ~ file: authStore.js ~ line 13 ~ AuthStore ~ signup= ~ error",
        error
      );
    }
  };

  signin = async (userCredentials) => {
    try {
      const res = await instance.post("/signin", userCredentials);
      this.setUser(res.data.token);
    } catch (error) {
      console.log(
        "🚀 ~ file: authStore.js ~ line 29 ~ AuthStore ~ signin= ~ error",
        error
      );
    }
  };

  signout = () => {
    delete instance.defaults.headers.common.Authorization;
    localStorage.removeItem("myToken");
    this.user = null;
  };

  checkForToken = () => {
    const token = localStorage.getItem("myToken");
    if (token) {
      const user = decode(token);
      if (Date.now() < user.exp) {
        this.setUser(token);
      } else {
        localStorage.removeItem("myToken");
      }
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;

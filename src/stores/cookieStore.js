import { makeObservable, observable, action } from "mobx";
import slugify from "react-slugify";
import axios from "axios";

class CookieStore {
  cookies = [];

  constructor() {
    makeObservable(this, {
      cookies: observable,
      // createCookie: action,
      // fetchCookies: action,
      // updateCookie: action,
      // deleteCookie: action,
    });
  }

  fetchCookies = async () => {
    try {
      const response = await axios.get("http://localhost:8000/cookies");
      this.cookies = response.data;
    } catch (error) {
      console.error(
        "🚀 ~ file: cookieStore.js ~ line 22 ~ CookieStore ~ error",
        error
      );
    }
  };

  createCookie = async (newCookie) => {
    // this.cookies.push(newCookie);
    try {
      const response = await axios.post(
        "http://localhost:8000/cookies",
        newCookie
      );
      this.cookies.push(response.data);
      console.log(
        "🚀 ~ file: cookieStore.js ~ line 35 ~ CookieStore ~ response.data",
        response.data
      );
    } catch (error) {
      console.error(
        "🚀 ~ file: cookieStore.js ~ line 35 ~ CookieStore ~ error",
        error
      );
    }
  };

  updateCookie = async (updatedCookie) => {
    try {
      await axios.put(
        `http://localhost:8000/cookies/${updatedCookie.id}`,
        updatedCookie
      );
      const cookie = this.cookies.find(
        (cookie) => cookie.id === updatedCookie.id
      );
      for (const key in cookie) cookie[key] = updatedCookie[key];

      // cookie.slug = slugify(cookie.name);
    } catch (error) {
      console.error(
        "🚀 ~ file: cookieStore.js ~ line 61 ~ CookieStore ~ error",
        error
      );
    }
  };

  deleteCookie = async (cookieId) => {
    try {
      await axios.delete(`http://localhost:8000/cookies/${cookieId}`);
      this.cookies = this.cookies.filter((cookie) => cookie.id !== cookieId);
    } catch (error) {
      console.error(
        "🚀 ~ file: cookieStore.js ~ line 50 ~ CookieStore ~ deleteCookie ~ error",
        error
      );
    }
  };
}

const cookieStore = new CookieStore();
cookieStore.fetchCookies();

export default cookieStore;

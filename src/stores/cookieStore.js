import { makeObservable, observable, action } from "mobx";
import slugify from "react-slugify";
import axios from "axios";

class CookieStore {
  cookies = [];
  loading = true;

  constructor() {
    makeObservable(this, {
      cookies: observable,
      loading: observable,
      createCookie: action,
      fetchCookies: action,
      updateCookie: action,
      deleteCookie: action,
    });
  }

  getCookieById = (cookieId) =>
    this.cookies.find((cookie) => cookie.id === cookieId);

  fetchCookies = async () => {
    try {
      const response = await axios.get("http://localhost:8000/cookies");
      this.cookies = response.data;
      this.loading = false;
    } catch (error) {
      console.error(
        "🚀 ~ file: cookieStore.js ~ line 22 ~ CookieStore ~ error",
        error
      );
    }
  };

  createCookie = async (newCookie, bakery) => {
    try {
      const formData = new FormData();
      for (const key in newCookie) formData.append(key, newCookie[key]);

      const response = await axios.post(
        `http://localhost:8000/bakeries/${bakery.id}/cookies`,
        formData
      );
      this.cookies.push(response.data);
      bakery.cookies.push({ id: response.data.id });
      console.log(
        "🚀 ~ file: cookieStore.js ~ line 44 ~ CookieStore ~ createCookie= ~ bakery.cookies",
        bakery.cookies
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
      const formData = new FormData();
      for (const key in updatedCookie) formData.append(key, updatedCookie[key]);
      await axios.put(
        `http://localhost:8000/cookies/${updatedCookie.id}`,
        formData
      );
      let cookie = this.cookies.find(
        (cookie) => cookie.id === updatedCookie.id
      );
      for (const key in cookie) cookie[key] = updatedCookie[key];
      cookie.image = URL.createObjectURL(updatedCookie.image);
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

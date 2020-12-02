import { makeAutoObservable } from "mobx";
import axios from "axios";

class BakeryStore {
  bakeries = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchBakeries = async () => {
    try {
      const response = await axios.get("http://localhost:8000/bakeries");
      this.bakeries = response.data;
      this.loading = false;
    } catch (error) {
      console.error(
        "🚀 ~ file: bakeryStore.js ~ line 22 ~ BakeryStore ~ error",
        error
      );
    }
  };
}

const bakeryStore = new BakeryStore();
bakeryStore.fetchBakeries();

export default bakeryStore;

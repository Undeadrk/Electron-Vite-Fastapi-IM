import { defineStore } from "pinia";
export const useLoginStore = defineStore("login", {
  state: () => ({
    isLogined: false,
    token: localStorage.getItem("token") || "",
    user: {},
  }),
  getters: {

  },
  actions: {
    updateToken(token: string) {
      this.token = token;
      localStorage.setItem("token", JSON.stringify(token));
    },
    setUser(user: any) {
      this.user = user;
    },
    login(){
      this.isLogined = true;
    }
  },
});
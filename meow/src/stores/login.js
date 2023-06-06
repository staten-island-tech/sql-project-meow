import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useLoginStore = defineStore("login", {
  state: () => ({
    loginInfo: {},
    loggedIn: false,
    email: null,
  }),
  actions: {
    async signOut() {
      const { error } = await supabase.auth.signOut();
      this.loggedIn = false;
      if (error) {
        console.log(error);
      }
    },
    async signUp(email, password) {
      try {
        this.loggedIn = true;
        const { data, error } = await supabase.auth.signUp({
          email: email,
          password: password,
        });
        this.email = email;
        this.loginInfo = data;
        if (error) {
          console.log(error);
        }
      } catch {
        this.loggedIn = false;
      }
    },
    async signIn(email, password) {
      try {
        this.loggedIn = true;
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        });

        this.email = email;
        this.loginInfo = data;
        if (error) {
          console.log(error);
        }
      } catch {
        this.loggedIn = false;
      }
    },
  },
});

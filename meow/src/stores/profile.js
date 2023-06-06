import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useProfileStore = defineStore("profile", {
  state: () => ({
    username: null,
    email: null,
    pfp_image: null,
    gallery: [],
  }),
  actions: {
  }
});

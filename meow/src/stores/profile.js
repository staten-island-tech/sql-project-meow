import { defineStore } from "pinia";
import { supabase } from "../supabase";
import { useLoginStore } from "./login";

export const useProfileStore = defineStore("profile", {
  state: () => ({
    username: null,
    email: null,
    pfp_image: null,
    gallery: [],
  }),
  actions: {
    async createProfile(username, image) {
      this.username = username;
      this.email = useLoginStore().email;
      this.pfp_image = image;
      const { data, error } = await supabase
        .from("Meow")
        .insert([
          { email: this.email, image: this.pfp_image, username: this.username },
        ]);
      if (error) {
        console.log(error);
      }
    },
  },
});

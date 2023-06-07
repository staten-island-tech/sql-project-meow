import { defineStore, storeToRefs } from "pinia";
import { supabase } from "../supabase";
import { useLoginStore } from "./login";

export const useProfileStore = defineStore("profile", {
  state: () => ({
    username: null,
    email: null,
    pfp_image: null,
    gallery: [],
    id: null,
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
    async checkEmail() {
      this.email = useLoginStore().email;
      let { data, error } = await supabase
        .from("Meow")
        .select()
        .eq("email", this.email);
      if (error) {
        console.log(error);
      } else {
        console.log(data);
        return data;
      }
    },
    async readUser() {
      this.email = useLoginStore().email;
      let { data, error } = await supabase
        .from("Meow")
        .select()
        .eq("email", this.email);
      if (error) {
        console.log(error);
        return error;
      } else {
        const info = data[0];
        this.username = info.username;
        this.pfp_image = info.image;
        this.gallery = info.meows;
        this.id = info.id;
      }
    },
    async updateGallery() {
      let { data, error } = await supabase
        .from("Meow")
        .update({ gallery: this.gallery })
        .eq("id", this.id);
      if (error) {
        console.log(error);
      }
    },
  },
});

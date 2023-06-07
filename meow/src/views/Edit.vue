<template>
  <div>
    <nav-bar></nav-bar>
    <div class="flex">
      <div class="w-1/2">
        <div class="bg-gray-100 p-4 rounded-lg">
          <h2 class="text-3xl">Choose Image to add to Gallery</h2>
          <div class="flex flex-wrap">
            <img
              v-for="cat in cats"
              :src="cat"
              :key="cat"
              alt="Kitty Picture"
              class="w-28 h-28 object-cover m-4 shadow-lg rounded-full"
              @click="addGallery(cat)"
            />
          </div>
        </div>

        <h3 class="m-4 text-center text-4xl">OR</h3>

        <label class="text-xl" for="pfp-url">Enter Image URL:</label>
        <div>
          <input
            id="pfp-url"
            class="border-2 border-black p-2 mx-2 rounded-lg w-72"
            type="url"
            v-model="pfpURL"
          />
          <button
            type="button"
            class="cursor-pointer bg-red-100 py-2 px-4 rounded-md text-xl mt-4"
            @click="addGallery(pfpURL)"
          >
            Submit
          </button>
        </div>
      </div>
      <div class="w-1/2">
        <h2 class="text-5xl">Your Gallery</h2>
        <div class="flex flex-wrap">
          <img
            class="m-2 w-36 h-36"
            v-for="img in gallery"
            :src="img"
            :key="img"
            alt="cat"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import cats from "../assets/cats";
import capybaras from "../assets/capybaras.js";
import NavBar from "../components/NavBar.vue";
import { useProfileStore } from "../stores/profile";
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";

const profileStore = useProfileStore();
const { gallery } = storeToRefs(profileStore);
function addGallery(link) {
  if (link) {
    gallery.value.push(link);
    profileStore.updateGallery();
    console.log(gallery.value);
  }
}
</script>

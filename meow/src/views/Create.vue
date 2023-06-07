<template>
  <div>
    <div>
      <h1 class="text-5xl text-center mb-12">Create Profile</h1>
      <form class="flex flex-col w-1/2 m-auto" @submit.prevent="submit()">
        <label class="text-xl" for="username">Username</label>
        <input
          id="username"
          class="border-2 border-black p-2 m-2 rounded-lg"
          type="text"
          v-model="username"
        />
        <div class="flex">
          <div class="w-1/2">
            <div class="bg-gray-100 p-4 rounded-lg">
              <h2 class="text-3xl">Choose a profile picture:</h2>
              <div class="flex flex-wrap">
                <img
                  v-for="capybara in capybaras"
                  :src="capybara"
                  :key="capybara"
                  alt="Kitty Picture"
                  class="w-28 h-28 object-cover m-4 shadow-lg rounded-full"
                  @click="setProfilePicture(capybara)"
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
                class="cursor-pointer bg-red-100 py-2 px-4 rounded-md text-xl mt-4"
                @click="setProfilePicture(pfpURL)"
              >
                Submit
              </button>
            </div>
          </div>
          <div class="m-auto" v-if="image">
            <h2 class="text-3xl">Your Profile Picture:</h2>
            <img
              :src="image"
              alt="Your Profile Picture"
              class="w-72 h-72 object-cover m-4 shadow-lg rounded-full"
            />
          </div>
        </div>

        <button
          class="cursor-pointer bg-blue-100 py-2 px-4 rounded-md text-xl mt-8"
          type="submit"
        >
          Done
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import cats from "../assets/cats";
import capybaras from "../assets/capybaras.js";
import NavBar from "../components/NavBar.vue";
import { useProfileStore } from "../stores/profile";
import { ref } from "vue";
import router from "../router/index";

const profileStore = useProfileStore();
let image = ref();
const username = ref();
const pfpURL = ref();

function setProfilePicture(link) {
  if (link) {
    image.value = link;
  }
}

function submit() {
  profileStore.createProfile(username.value, image.value);
  router.push("/profile");
}
</script>

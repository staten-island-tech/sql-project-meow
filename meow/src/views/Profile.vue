<template>
  <div>
    <nav-bar></nav-bar>
    <div>
      <h1 class="text-7xl text-center mb-12">Your Profile</h1>
      <div class="flex m-auto w-1/2 h-1/2">
        <img
          :src="pfp_image"
          alt="PFP"
          class="w-72 h-72 object-cover m-4 shadow-lg rounded-full"
        />
        <h2 class="text-5xl my-auto ml-12">{{ username }}</h2>
      </div>
      <div>
        <h1 class="text-center text-5xl mt-24">Gallery</h1>
        <div class="flex mt-8 m-auto flex-wrap">
          <img
            class="m-2"
            v-for="img in gallery"
            :key="img"
            :src="img"
            alt="cat"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from "../components/NavBar.vue";
import { useProfileStore } from "../stores/profile";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

const profileStore = useProfileStore();
const { username } = storeToRefs(profileStore);
const { pfp_image } = storeToRefs(profileStore);
const { gallery } = storeToRefs(profileStore);
onMounted(() => {
  profileStore.readUser();
});
</script>

<template>
  <div>
    <div v-if="!loginStore.loggedIn" class="flex justify-between">
      <div class="m-8">
        <RouterLink class="mx-8" to="/">Home</RouterLink>
      </div>
      <div class="m-8">
        <RouterLink class="mx-8" to="/register">Register</RouterLink>
        <RouterLink class="mx-8" to="/login">Login</RouterLink>
      </div>
    </div>
    <div v-else class="flex justify-between">
      <div class="m-8 flex">
        <RouterLink class="my-auto mx-8" to="/">Home</RouterLink>
        <RouterLink class="my-auto mx-8" to="/edit">Edit Gallery</RouterLink>
        <RouterLink class="mx-8 flex" to="/profile">
          <img :src="pfp_image" alt="" class="w-12 h-12 rounded-full" />
          <p class="ml-2 my-auto">{{ username }}</p>
        </RouterLink>
      </div>
      <div class="m-8 mr-16 text-red-500">
        <RouterLink class="my-auto" to="/" @click="loginStore.signOut()"
          >Logout</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLoginStore } from "../stores/login";
import { useProfileStore } from "../stores/profile";
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";

const loginStore = useLoginStore();
const profileStore = useProfileStore();
const { username } = storeToRefs(profileStore);
const { pfp_image } = storeToRefs(profileStore);
</script>

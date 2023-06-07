<template>
  <div>
    <nav-bar></nav-bar>
    <div>
      {{ profileStore.username }}
    </div>
    <img :src="profileStore.pfp_image" alt="" />
  </div>
</template>

<script setup>
import NavBar from "../components/NavBar.vue";
import { useProfileStore } from "../stores/profile";
import { ref, onMounted } from "vue";

const profileStore = useProfileStore();

onMounted(() => {
  profileStore.readUser();
});
</script>
